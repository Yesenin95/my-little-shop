// cakePage.tsx

'use client';

import React, { useEffect, useState } from 'react';
import {
   Box,
   Card,
   CardBody,
   Image,
   Stack,
   Heading,
   Text,
   Divider,
   CardFooter,
   ButtonGroup,
   Button,
   SimpleGrid,
   Modal,
   ModalOverlay,
   ModalContent,
   ModalHeader,
   ModalBody,
   ModalFooter,
   useToast,
} from '@chakra-ui/react';
import { useRouter } from 'next/navigation';
import { useCart } from '../../../cartContext/cartContext';

interface Cake {
   id: string;
   name: string;
   description: string;
   quantity: number;
   price: number;
   image: string;
}

export default function CakePage() {
   const [cakes, setCakes] = useState<Cake[]>([]);
   const [showModal, setShowModal] = useState(false);
   const [selectedCake, setSelectedCake] = useState<Cake | null>(null);
   const { addToCart } = useCart();
   const router = useRouter();
   const toast = useToast();

   useEffect(() => {
      async function fetchCakes() {
         try {
            const response = await fetch('/api/db/Cake');
            const data = await response.json();
            setCakes(data);
         } catch (error) {
            console.error('Error fetching Cakes:', error);
         }
      }

      fetchCakes();
   }, []);

   const handleOpenModal = (cake: Cake) => {
      setSelectedCake(cake);
      setShowModal(true);
   };

   const handleCloseModal = () => {
      setShowModal(false);
      setSelectedCake(null);
   };

   const handleAddToCart = (cake: Cake) => {
      addToCart({ ...cake, type: 'cake' });
      toast({
         title: "Товар добавлен в корзину",
         status: "success",
         duration: 3000,
         isClosable: true,
      });
   };

   return (
      <>
         <Heading as="h1" mb={5} textAlign="center">Торты</Heading>
         <SimpleGrid columns={[1, 2, 3, 4]} spacing={5} px={[2, 5, 10]}>
            {cakes.map(cake => (
               <Card key={cake.id} maxW={{ base: '100%', sm: 'sm' }} overflow="hidden">
                  <Image
                     src={cake.image || 'https://via.placeholder.com/150'}
                     alt={cake.name}
                     borderRadius="md"
                     width="100%"
                     height="200px"
                     objectFit="cover"
                     cursor="pointer"
                  />
                  <CardBody>
                     <Stack spacing="3">
                        <Heading size="md" isTruncated>{cake.name}</Heading>
                        <Text color="blue.600" fontSize="2xl">
                           ${cake.price}
                        </Text>
                     </Stack>
                  </CardBody>
                  <Divider />
                  <CardFooter>
                     <ButtonGroup width="100%" justifyContent="center">
                        <Button colorScheme="blue" onClick={() => handleAddToCart(cake)}>
                           В корзину
                        </Button>
                        <Button onClick={() => handleOpenModal(cake)}>
                           Описание
                        </Button>
                     </ButtonGroup>
                  </CardFooter>
               </Card>
            ))}
         </SimpleGrid>
         <Modal isOpen={showModal} onClose={handleCloseModal}>
            <ModalOverlay />
            <ModalContent>
               <ModalHeader>{selectedCake?.name}</ModalHeader>
               <ModalBody>
                  <Text>{selectedCake?.description}</Text>
               </ModalBody>
               <ModalFooter>
                  <Button mr={3} onClick={() => handleAddToCart(selectedCake!)}>
                     В корзину
                  </Button>
                  <Button variant="ghost" onClick={handleCloseModal}>
                     Закрыть
                  </Button>
               </ModalFooter>
            </ModalContent>
         </Modal>
      </>
   );
}
