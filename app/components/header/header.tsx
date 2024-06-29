'use client';
import { Box, Flex, IconButton, Badge, Drawer, DrawerBody, DrawerHeader, DrawerOverlay, DrawerContent, DrawerCloseButton, useDisclosure, Button } from '@chakra-ui/react';
import Image from 'next/image';
import { FaShoppingCart, FaBars } from 'react-icons/fa';
import { useRouter, usePathname } from 'next/navigation';
import Link from 'next/link';
import { useCart } from '../cartContext/cartContext';
import styles from './page.module.css';

const Header = () => {
   const { getCartItemCount } = useCart();
   const router = useRouter();
   const currentPath = usePathname();
   const { isOpen, onOpen, onClose } = useDisclosure();
   const handleCartClick = () => {
      router.push('/components/pages/Cart');
   };

   return (
      <Flex as="header" align="center" justify="space-between" p={4} color="white" position="fixed" top={0} left={0} w="100vw" zIndex={10}>
         <Link href="/">
            <Image src={'/logo.svg'} width={40} height={40} alt={'Лого'} />
         </Link>
         <Box display={{ base: 'none', md: 'flex' }} gap={'20px'}>
            <Link href="/" className={currentPath === '/' ? styles.activeLink : styles.link}>Главная</Link>
            <Link href="/components/pages/Catalog" className={currentPath === '/components/pages/Catalog' ? styles.activeLink : styles.link}>Каталог</Link>
            <Link href="/components/pages/Contacts" className={currentPath === '/components/pages/Contacts' ? styles.activeLink : styles.link}>Контакты</Link>
            <Link href="/components/pages/About" className={currentPath === '/components/pages/About' ? styles.activeLink : styles.link}>О нас</Link>
            <Link href="/components/pages/Otziv" className={currentPath === '/components/pages/Otziv' ? styles.activeLink : styles.link}>Отзывы</Link>
         </Box>
         <Box display={{ base: 'flex', md: 'none' }} alignItems="center" background={'black'}>
            <IconButton
               aria-label="Menu"
               icon={<FaBars />}
               onClick={onOpen}
               mr={2}
            />
            <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
               <DrawerOverlay />
               <DrawerContent>
                  <DrawerCloseButton />
                  <DrawerHeader>Меню</DrawerHeader>
                  <DrawerBody>
                     <Flex direction="column" gap="20px">
                        <Link href="/" className={currentPath === '/' ? styles.activeLink : styles.link} onClick={onClose}>Главная</Link>
                        <Link href="/components/pages/Catalog" className={currentPath === '/components/pages/Catalog' ? styles.activeLink : styles.link} onClick={onClose}>Каталог</Link>
                        <Link href="/components/pages/Contacts" className={currentPath === '/components/pages/Contacts' ? styles.activeLink : styles.link} onClick={onClose}>Контакты</Link>
                        <Link href="/components/pages/About" className={currentPath === '/components/pages/About' ? styles.activeLink : styles.link} onClick={onClose}>О нас</Link>
                        <Link href="/components/pages/Otziv" className={currentPath === '/components/pages/Otziv' ? styles.activeLink : styles.link} onClick={onClose}>Отзывы</Link>
                     </Flex>
                  </DrawerBody>
               </DrawerContent>
            </Drawer>
         </Box>
            <Box>
               <Link href={'/api/auth/signIn'}>
                  <Button>Вход </Button>
               </Link>
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
