'use client'
import React, { useState } from 'react';
import {
   Grid,
   Box,
   Heading,
   Text,
   Stack,
   Image,
   Button,
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
import { useRouter } from 'next/navigation';

interface SelectedItem {
   id: string;
   type: string;
   name: string;
}

const CartPage = () => {
   const { cart, removeFromCart, updateQuantity } = useCart();
   const [isModalOpen, setIsModalOpen] = useState(false);
   const [selectedItem, setSelectedItem] = useState<SelectedItem | null>(null);
   const router = useRouter();
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
            title: 'Товар удален из корзины',
            status: 'info',
            duration: 3000,
            isClosable: true,
         });
         handleCloseModal();
      }
   };

   const handleCheckout = () => {
      router.push('/components/pages/Checkout');
   };

   const totalCost = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

   return (
      <Box p={5}>
         <Grid templateColumns={{ base: '1fr', md: '1fr 1fr' }} gap={10}>
            <Box>
               {cart.length === 0 ? (
                  <Text textAlign="center" fontSize="lg">
                     Ваша корзина пуста
                  </Text>
               ) : (
                     <Grid templateColumns={{ base: '1fr 1fr' }} gap={10} >
                     {cart.map((item) => (
                        <Box
                           key={`${item.type}-${item.id}`}
                           p={5}
                           shadow="md"
                           borderWidth="1px"
                           borderRadius="md"
                           width="100%"
                           maxWidth={{ base: '100%', md: 'auto' }} // Устанавливаем максимальную ширину для адаптивности
                        >
                           <Image
                              src={item.image || 'https://via.placeholder.com/150'}
                              alt={item.name}
                              borderRadius="md"
                              width="100%"
                              height="200px"
                              objectFit="cover"
                           />
                           <Stack spacing={2} mt={3}>
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
                  </Grid>
               )}
            </Box>
            <Box>
               <Box bg="gray.100" p={5} borderRadius="md" maxWidth={{ base: '250px', md: 'auto' }} >
                  <Heading as="h2" size="md" mb={3}>
                     Общая стоимость
                  </Heading>
                  <Text fontWeight="bold" fontSize="xl">
                     ${totalCost.toFixed(2)}
                  </Text>
                  <Button
                     mt={5}
                     onClick={handleCheckout}
                     colorScheme="blue"
                     width="100%"
                     isDisabled={cart.length === 0} 
                  >
                     Оформить заказ
                  </Button>
               </Box>
            </Box>
         </Grid>
         <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
            <ModalOverlay />
            <ModalContent>
               <ModalHeader>Удаление товара</ModalHeader>
               <ModalBody>
                  <Text>Вы точно хотите удалить {selectedItem ? selectedItem.name : ''} из корзины?</Text>
               </ModalBody>
               <ModalFooter>
                  <Button colorScheme="red" onClick={handleRemoveFromCart}>
                     Да
                  </Button>
                  <Button ml={3} onClick={handleCloseModal}>
                     Нет
                  </Button>
               </ModalFooter>
            </ModalContent>
         </Modal>
      </Box>
   );
};

export default CartPage;
