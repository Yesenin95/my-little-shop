// Header.tsx

'use client';
import React from 'react';
import { Box, Flex, IconButton, Badge } from '@chakra-ui/react';
import Image from 'next/image';
import { FaShoppingCart } from 'react-icons/fa';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { useCart } from '../cartContext/cartContext';

const Header = () => {
   const { getCartItemCount } = useCart();
   const router = useRouter();

   const handleCartClick = () => {
      router.push('/components/pages/Cart');
   };

   return (
      <Flex as="header" align="center" justify="space-between" p={4}  color="black" position={'fixed'} top={0} left={0} w={'100vw'}>
         <Link href="/">
            <Image src={'/logo.svg'} width={40} height={40} alt={'Лого'} />
         </Link>
         <Box display={'flex'} gap={'20px'}>
            <Link href={'/'} className='text-3xl' > Главная</Link>
            <Link href={'/components/pages/Catalog'}>Каталог</Link>
            <Link href={'/components/pages/Contacts'}>Контакты</Link>
            <Link href={'/components/pages/About'}>О нас</Link>
            <Link href={'/components/pages/Otziv'}>Отзывы</Link>
         </Box>
         <Box position="relative">
            <IconButton
               aria-label="Cart"
               icon={<FaShoppingCart />}
               onClick={handleCartClick}
            />
            {getCartItemCount() > 0 && (
               <Badge
                  position="absolute"
                  top="-1"
                  right="-1"
                  bg="red.500"
                  borderRadius="full"
                  px={2}
                  py={1}
                  color="white"
                  fontSize="xs"
               >
                  {getCartItemCount()}
               </Badge>
            )}
         </Box>
      </Flex>
   );
};

export default Header;
