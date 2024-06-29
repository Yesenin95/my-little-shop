import { Box, Flex, Text } from '@chakra-ui/react';
import Image from 'next/image';
import Link from 'next/link';

export default function Catalog() {
   return (
      <>
         <Flex alignItems="center" justifyContent="center" pt={200} gap={20} flexWrap={'wrap'}>
            <Link href="/components/pages/category/cupcake">
               <Flex
                  flexDirection="column"
                  alignItems="center" // Центрируем текст по горизонтали
                  gap={10}
                  border="2px solid black" // Толщина рамки 2px и цвет черный
                  w={200}
                  h={200}
                  borderRadius="5px"
                  boxShadow="0 4px 8px rgba(5, 10, 0, 0.1)" // Эффект box-shadow
                  transition="transform 0.3s ease-in-out" // Плавное изменение при hover
                  _hover={{
                     transform: 'scale(1.1)',
                     boxShadow: '0 4px 8px rgba(123, 25, 55, 0.3)', // Увеличиваем масштаб при наведении
                  }}
               >
                  <Box m="auto">
                     <Image src="/cupcake/1.jpg" height={150} width={150} alt="Картинка" />
                     <Text textAlign="center">Капкейк</Text>
                  </Box>
               </Flex>
            </Link>
            <Link href="/components/pages/category/cake">
               <Flex
                  flexDirection="column"
                  alignItems="center" // Центрируем текст по горизонтали
                  gap={10}
                  border="2px solid black" // Толщина рамки 2px и цвет черный
                  w={200}
                  h={200}
                  borderRadius="5px"
                  boxShadow="0 4px 8px rgba(5, 10, 0, 0.1)" // Эффект box-shadow
                  transition="transform 0.3s ease-in-out" // Плавное изменение при hover
                  _hover={{
                     transform: 'scale(1.1)',
                     boxShadow: '0 4px 8px rgba(123, 25, 55, 0.3)', // Увеличиваем масштаб при наведении
                  }}
               >
                  <Box m="auto">
                     <Image src="/cupcake/2.jpg" height={150} width={150} alt="Картинка" />
                     <Text textAlign="center">Торты</Text>
                  </Box>
               </Flex>
            </Link>
            <Link href="/components/pages/category/cake">
               <Flex
                  flexDirection="column"
                  alignItems="center" // Центрируем текст по горизонтали
                  gap={10}
                  border="2px solid black" // Толщина рамки 2px и цвет черный
                  w={200}
                  h={200}
                  borderRadius="5px"
                  boxShadow="0 4px 8px rgba(5, 10, 0, 0.1)" // Эффект box-shadow
                  transition="transform 0.3s ease-in-out" // Плавное изменение при hover
                  _hover={{
                     transform: 'scale(1.1)',
                     boxShadow: '0 4px 8px rgba(123, 25, 55, 0.3)', // Увеличиваем масштаб при наведении
                  }}
               >
                  <Box m="auto">
                     <Image src="/cupcake/1.jpg" height={150} width={150} alt="Картинка" />
                     <Text textAlign="center">Пироженные</Text>
                  </Box>
               </Flex>
            </Link>
            
         </Flex>
      </>
   );
}
