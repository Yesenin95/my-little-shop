import { Box, Flex, Text, Link } from '@chakra-ui/react';
import Image from 'next/image';

export default function FooterComponents() {
   return (
      <Flex
         borderTop="3px solid black"
         w="100vw"
         background="fuchsia"
         h="100px"
         justifyContent="space-between"
         alignItems="center"
         p={4}
      >
         <Box display="flex" alignItems="center">
            <Image src="/logo.svg" alt="Картинка" width={50} height={50} />
         </Box>
         <Flex gap={4}>
            <Link href="https://api.telegram.com/send/?phone=79200000000&text=Здравствуйте%2C+у+меня+есть+вопрос" isExternal>
               <Image src="/telegram.svg" alt="telegram" width={35} height={35} />
            </Link>
            <Link href="https://api.whatsapp.com/send/?phone=79200000000&text=Здравствуйте%2C+у+меня+есть+вопрос" isExternal>
               <Image src="/whatsapp.svg" alt="whatsapp" width={35} height={35} />
            </Link>
            <Link href="https://api.instagram.com/send/?phone=79200000000&text=Здравствуйте%2C+у+меня+есть+вопрос" isExternal>
               <Image src="/instagram.svg" alt="instagram" width={35} height={35} />
            </Link>
         </Flex>
         <Box display="flex" alignItems="center">
            <Link href="tel:+79999999999">
               <Flex alignItems="center" gap={2}>
                  <Image src="/telephone.svg" alt="Телефон" width={30} height={30} />
                  <Text color="white">Позвони нам</Text>
               </Flex>
            </Link>
         </Box>
      </Flex>
   );
}
