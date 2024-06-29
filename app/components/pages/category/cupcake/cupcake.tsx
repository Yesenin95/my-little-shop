
'use client';

import React, { useEffect, useState } from 'react';
import {
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
import { useCart } from '../../../cartContext/cartContext';
import { CartItem, ProductCategory } from '../../../cartContext/cartContext';

interface Cupcake {
   id: string;
   name: string;
   description: string;
   quantity: number;
   price: number;
   image: string;
   protein: string;
   fats: string;
   carbohydrates: string;
   mass: string;
   time?: string;
   type: ProductCategory;
}

export default function CupcakePage() {
   const [cupcakes, setCupcakes] = useState<Cupcake[]>([]);
   const [showModal, setShowModal] = useState(false);
   const [selectedCupcake, setSelectedCupcake] = useState<Cupcake | null>(null);
   const { addToCart } = useCart();
   const toast = useToast();

   useEffect(() => {
      async function fetchCupcakes() {
         try {
            const response = await fetch('/api/db/Cupcake');
            const data = await response.json();
            setCupcakes(data);
         } catch (error) {
            console.error('Error fetching Cupcakes:', error);
         }
      }

      fetchCupcakes();
   }, []);

   const handleOpenModal = (cupcake: Cupcake) => {
      setSelectedCupcake(cupcake);
      setShowModal(true);
   };

   const handleCloseModal = () => {
      setShowModal(false);
      setSelectedCupcake(null);
   };

   const handleAddToCart = (cupcake: Cupcake) => {
      const item: CartItem = {
         id: cupcake.id,
         name: cupcake.name,
         description: cupcake.description,
         quantity: cupcake.quantity,
         price: cupcake.price,
         image: cupcake.image,
         type: ProductCategory.Cupcake,
      };
      addToCart(item);
      toast({
         title: "Товар добавлен в корзину",
         status: "success",
         duration: 3000,
         isClosable: true,
      });
   };

   return (
      <>
         <Heading as="h1" mb={5} textAlign="center">Капкейки</Heading>
         <SimpleGrid columns={[1, 2, 3, 4]} spacing={5} px={[2, 5, 10]}>
            {cupcakes.map(cupcake => (
               <Card key={cupcake.id} maxW={{ base: '100%', sm: 'sm' }} overflow="hidden">
                  <Image
                     src={cupcake.image || 'https://via.placeholder.com/150'}
                     alt={cupcake.name}
                     borderRadius="md"
                     width="100%"
                     height="200px"
                     objectFit="cover"
                     cursor="pointer"
                  />
                  <CardBody>
                     <Stack spacing="3">
                        <Heading size="md" isTruncated>{cupcake.name}</Heading>
                        <Text color="blue.600" fontSize="2xl">
                           ${cupcake.price}
                        </Text>
                     </Stack>
                  </CardBody>
                  <Divider />
                  <CardFooter>
                     <ButtonGroup width="100%" justifyContent="center">
                        <Button colorScheme="blue" onClick={() => handleAddToCart(cupcake)}>
                           В корзину
                        </Button>
                        <Button onClick={() => handleOpenModal(cupcake)}>
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
               <ModalHeader>{selectedCupcake?.name}</ModalHeader>
               <ModalBody>
                  <Text>{selectedCupcake?.description}</Text>
                  <Text>Белки: {selectedCupcake?.protein}</Text>
                  <Text>Жиры: {selectedCupcake?.fats}</Text>
                  <Text>Углеводы: {selectedCupcake?.carbohydrates}</Text>
                  <Text>Масса: {selectedCupcake?.mass}</Text>
                  <Text>Время: {selectedCupcake?.time}</Text>
               </ModalBody>
               <ModalFooter>
                  <Button mr={3} onClick={() => handleAddToCart(selectedCupcake!)}>
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
