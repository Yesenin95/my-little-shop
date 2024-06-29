import styles from './page.module.css';
import Image from 'next/image';
import { Box, Heading, Text } from '@chakra-ui/react'; // Импортируем Chakra UI компоненты

export default function Home() {
   return (
      <Box p={5} maxW="1200px" mx="auto">
         <Box display={{ base: 'block', md: 'grid' }} gridTemplateColumns={{ md: '1fr 1fr' }} gap={10}>
            <Box>
               <Image src={'/img.jpg'} height={250} width={350} alt={'Картинка'} />
            </Box>
            <Box>
               <Box className={styles.textContainer}>
                  <Heading as="h1" className={styles.h1} fontSize={{ base: '2xl', md: '4xl' }}>
                     Сладкая <span>жизнь!</span>
                  </Heading>
                  <Text fontSize={{ base: 'lg', md: 'xl' }}>Выбери себе сладость - в радость</Text>
               </Box>
            </Box>
         </Box>
      </Box>
   );
}
