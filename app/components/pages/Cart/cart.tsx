'use client';

import React, { useState } from 'react';
import {
   Box,
   Button,
   Heading,
   SimpleGrid,
   Stack,
   Text,
   Image,
   HStack,
   useToast,
   Modal,
   ModalOverlay,
   ModalContent,
   ModalHeader,
   ModalBody,
   ModalFooter,
} from '@chakra-ui/react';
import { ProductCategory, useCart } from '../../cartContext/cartContext';
interface SelectedItem {
   id: string;
   type: string;
   name: string;
}
const CartPage = () => {
   const { cart, removeFromCart, updateQuantity } = useCart();
   const [isModalOpen, setIsModalOpen] = useState(false);
   const [selectedItem, setSelectedItem] = useState<SelectedItem | null>(null);

   const toast = useToast();

   const handleOpenModal = (item: any) => {
      setSelectedItem(item);
      setIsModalOpen(true);
   };

   const handleCloseModal = () => {
      setIsModalOpen(false);
      setSelectedItem(null);
   };

   const handleRemoveFromCart = () => {
      if (selectedItem) {
         removeFromCart(selectedItem.id, selectedItem.type as ProductCategory);
         toast({
            title: "Товар удален из корзины",
            status: "success",
            duration: 3000,
            isClosable: true,
         });
         handleCloseModal();
      }
   };
   const handleCheckout = () => {
      // Навигация на страницу оформления заказа
      // Например, с помощью router.push('/checkout');
      console.log('Переход на страницу оформления заказа');
   };
   const totalCost = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

   return (
      <Box p={5}>
         <Heading as="h1" mb={5} textAlign="center">Корзина</Heading>
         <SimpleGrid columns={[1, 2]} spacing={10}>
            <Box>
               {cart.length === 0 ? (
                  <Text textAlign="center" fontSize="lg">Ваша корзина пуста</Text>
               ) : (
                  <Stack spacing={5}>
                     {cart.map(item => (
                        <Box key={`${item.type}-${item.id}`} p={5} shadow="md" borderWidth="1px" borderRadius="md">
                           <Image
                              src={item.image || 'https://via.placeholder.com/150'}
                              alt={item.name}
                              borderRadius="md"
                              width="100%"
                              height="200px"
                              objectFit="cover"
                           />
                           <Stack spacing={2}>
                              <Text fontWeight="bold">{item.name}</Text>
                              <Text>${item.price}</Text>
                              <HStack justify="space-between">
                                 <Button
                                    onClick={() => {
                                       if (item.quantity === 1) {
                                          handleOpenModal(item);
                                       } else {
                                          updateQuantity(item.id, item.type, item.quantity - 1);
                                       }
                                    }}
                                    width={'30px'}
                                    bg={'green.700'}
                                    _hover={{ bg: 'red.500' }}
                                    fontSize="sm"
                                 >
                                    -
                                 </Button>
                                 <Text>{item.quantity}</Text>
                                 <Button
                                    onClick={() => updateQuantity(item.id, item.type, item.quantity + 1)}
                                    width={'30px'}
                                    bg={'green.700'}
                                    _hover={{ bg: 'red.700' }}
                                    fontSize="sm"
                                 >
                                    +
                                 </Button>
                                 <Button
                                    onClick={() => handleOpenModal(item)}
                                    bg={'red.500'}
                                    color="white"
                                    _hover={{ bg: 'red.700' }}
                                    fontSize="sm"
                                 >
                                    Удалить
                                 </Button>
                              </HStack>
                           </Stack>
                        </Box>
                     ))}
                  </Stack>
               )}
            </Box>
            <Box>
               <Box bg="gray.100" p={5} borderRadius="md">
                  <Heading as="h2" size="md" mb={3}>Общая стоимость</Heading>
                  <Text fontWeight="bold" fontSize="xl">${totalCost.toFixed(2)}</Text>
                  <Button mt={5} onClick={handleCheckout} colorScheme="blue" width="100%">
                     Оформить заказ
                  </Button>
               </Box>
            </Box>
         </SimpleGrid>
         <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
            <ModalOverlay />
            <ModalContent>
               <ModalHeader>Удаление товара</ModalHeader>
               <ModalBody>
                  <Text>Вы точно хотите удалить {selectedItem ? selectedItem.name : ''} из корзины?</Text>
               </ModalBody>
               <ModalFooter>
                  <Button colorScheme="red" onClick={handleRemoveFromCart}>Да</Button>
                  <Button ml={3} onClick={handleCloseModal}>Нет</Button>
               </ModalFooter>
            </ModalContent>
         </Modal>
      </Box>
   );
};

export default CartPage;
