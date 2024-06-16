import { Box, Flex } from '@chakra-ui/react';
import Image from 'next/image';
import Link from 'next/link';

export default function Catalog() {
   return (
      <>
         <Link href="/components/pages/category/cupcake" >
            <Flex>
               <Box>
                  <Image src={'/cupcake/1.jpg'} height={50} width={50} alt={'Картинка'} />
               </Box>
               <Box>Капкейк</Box>
            </Flex>
         </Link>
         <Link href="/components/pages/category/cake">
            <Flex>
               <Box>
                  <Image src={'/cupcake/2.jpg'} height={50} width={50} alt={'Картинка'} />
               </Box>
               <Box>Торты</Box>
            </Flex>
         </Link>
         <Link href="/components/pages/category/cake">
            <Flex>
               <Box>
                  <Image src={'/cupcake/1.jpg'} height={50} width={50} alt={'Картинка'} />
               </Box>
               <Box>Пироженные</Box>
            </Flex>
         </Link>
      </>
   );
}
