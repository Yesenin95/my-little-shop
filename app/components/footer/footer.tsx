import { Box, Flex, Text } from '@chakra-ui/react';
import Image from 'next/image';
import Link from 'next/link';
export default function FooterComponents() {
   return <>
      <Flex zIndex={10} position={'fixed'} bottom={0} left={0}>
         <Image src={'/logo.svg'} alt={'Картинка'} width={50} height={50} />
         <Flex>
            <Link href='https://api.telegram.com/send/?phone=79200000000&text=Здравствуйте%2C+у+меня+есть+вопрос'>
               <Flex>
                  <Image src={'/telegram.svg'} alt={'telegram'} width={35} height={35} />
               </Flex>
            </Link>
            <Link href='https://api.whatsapp.com/send/?phone=79200000000&text=Здравствуйте%2C+у+меня+есть+вопрос'>
               <Flex>
                  <Image src={'/whatsapp.svg'} alt={'whatsapp'} width={35} height={35} />
               </Flex>
            </Link>
            <Link href='https://api.instagram.com/send/?phone=79200000000&text=Здравствуйте%2C+у+меня+есть+вопрос'>
               <Flex>
                  <Image src={'/instagram.svg'} alt={'instagram'} width={35} height={35} />
               </Flex>
            </Link>
         </Flex>
         <Box>
            <Link href='tel:+79999999999'>
               <Flex>
                  <Image src={'/telephone.svg'} alt={'ВотСап'} width={30} height={30} />
                  <Text>Позвони нам</Text>
               </Flex>
            </Link>
         </Box>
      </Flex>
   </>
}