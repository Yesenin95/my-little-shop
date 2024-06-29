'use client'
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Box, Button, Heading, Input, Select, Stack, Text, useToast } from '@chakra-ui/react';

const Checkout = () => {
   const router = useRouter();
   const [lastName, setLastName] = useState('');
   const [firstName, setFirstName] = useState('');
   const [middleName, setMiddleName] = useState('');
   const [city, setCity] = useState('');
   const [street, setStreet] = useState('');
   const [house, setHouse] = useState('');
   const [apartment, setApartment] = useState('');
   const [floor, setFloor] = useState('');
   const [intercom, setIntercom] = useState('');
   const [desiredDeliveryTime, setDesiredDeliveryTime] = useState('');
   const [phoneNumber, setPhoneNumber] = useState('');
   const [orderName, setOrderName] = useState('');
   const [deliveryMethod, setDeliveryMethod] = useState('');
   const [paymentMethod, setPaymentMethod] = useState('');
   const [cardNumber, setCardNumber] = useState('');
   const [cardExpiry, setCardExpiry] = useState('');
   const [cardCVV, setCardCVV] = useState('');
   const [orderPlaced, setOrderPlaced] = useState(false);
   const [orderNumber, setOrderNumber] = useState('');
   const toast = useToast();

   const handleLastNameChange = (e: React.ChangeEvent<HTMLInputElement>) => setLastName(e.target.value);
   const handleFirstNameChange = (e: React.ChangeEvent<HTMLInputElement>) => setFirstName(e.target.value);
   const handleMiddleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => setMiddleName(e.target.value);
   const handleCityChange = (e: React.ChangeEvent<HTMLInputElement>) => setCity(e.target.value);
   const handleStreetChange = (e: React.ChangeEvent<HTMLInputElement>) => setStreet(e.target.value);
   const handleHouseChange = (e: React.ChangeEvent<HTMLInputElement>) => setHouse(e.target.value);
   const handleApartmentChange = (e: React.ChangeEvent<HTMLInputElement>) => setApartment(e.target.value);
   const handleFloorChange = (e: React.ChangeEvent<HTMLInputElement>) => setFloor(e.target.value);
   const handleIntercomChange = (e: React.ChangeEvent<HTMLInputElement>) => setIntercom(e.target.value);
   const handleDesiredDeliveryTimeChange = (e: React.ChangeEvent<HTMLInputElement>) => setDesiredDeliveryTime(e.target.value);
   const handlePhoneNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => setPhoneNumber(e.target.value);
   const handleOrderNameChange = (e: React.ChangeEvent<HTMLInputElement>) => setOrderName(e.target.value);
   const handleDeliveryMethodChange = (e: React.ChangeEvent<HTMLSelectElement>) => setDeliveryMethod(e.target.value);
   const handlePaymentMethodChange = (e: React.ChangeEvent<HTMLSelectElement>) => setPaymentMethod(e.target.value);
   const handleCardNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => setCardNumber(e.target.value);
   const handleCardExpiryChange = (e: React.ChangeEvent<HTMLInputElement>) => setCardExpiry(e.target.value);
   const handleCardCVVChange = (e: React.ChangeEvent<HTMLInputElement>) => setCardCVV(e.target.value);

   const handlePlaceOrder = () => {
      if (
         lastName &&
         firstName &&
         (deliveryMethod === 'Самовывоз' || (city && street && house && apartment && floor && intercom && desiredDeliveryTime)) &&
         phoneNumber &&
         orderName &&
         paymentMethod &&
         (paymentMethod === 'Картой онлайн' || (cardNumber && cardExpiry && cardCVV))
      ) {
         const newOrderNumber = `ORDER-${Math.floor(Math.random() * 100000)}`;
         setOrderNumber(newOrderNumber);
         setLastName('');
         setFirstName('');
         setMiddleName('');
         setCity('');
         setStreet('');
         setHouse('');
         setApartment('');
         setFloor('');
         setIntercom('');
         setDesiredDeliveryTime('');
         setPhoneNumber('');
         setOrderName('');
         setDeliveryMethod('');
         setPaymentMethod('');
         setCardNumber('');
         setCardExpiry('');
         setCardCVV('');
         setOrderPlaced(true);
         setTimeout(() => {
            router.push('/');
         }, 2000);
      } else {
         toast({
            title: 'Не все поля формы заполнены.',
            position: 'top',
            status: 'error',
            duration: 3000,
            isClosable: true,
         });
      }
   };

   return (
      <Box p={5}>
         <Heading as="h1" mb={5} textAlign="center">
            Оформление заказа
         </Heading>
         {!orderPlaced ? (
            <Stack spacing={5} maxWidth="600px" mx="auto">
               <Select
                  placeholder="Способ получения"
                  value={deliveryMethod}
                  onChange={handleDeliveryMethodChange}
                  background={'black'}
                  color={'white'}
                  w={'350px'}
                  h={'30px'}
               >
                  <option value="Самовывоз">Самовывоз</option>
                  <option value="Доставка">Доставка</option>
               </Select>
               {deliveryMethod && (
                  <>
                     <Input placeholder="Фамилия" value={lastName} onChange={handleLastNameChange} background={'black'} color={'white'} w={'350px'} h={'30px'} />
                     <Input placeholder="Имя" value={firstName} onChange={handleFirstNameChange} background={'black'} color={'white'} w={'350px'} h={'30px'} />
                     <Input placeholder="Отчество" value={middleName} onChange={handleMiddleNameChange} background={'black'} color={'white'} w={'350px'} h={'30px'} />
                     {deliveryMethod === 'Доставка' && (
                        <>
                           <Input placeholder="Город" value={city} onChange={handleCityChange} background={'black'} color={'white'} w={'350px'} h={'30px'} />
                           <Input placeholder="Улица" value={street} onChange={handleStreetChange} background={'black'} color={'white'} w={'350px'} h={'30px'} />
                           <Input placeholder="Дом" value={house} onChange={handleHouseChange} background={'black'} color={'white'} w={'350px'} h={'30px'} />
                           <Input placeholder="Квартира" value={apartment} onChange={handleApartmentChange} background={'black'} color={'white'} w={'350px'} h={'30px'} />
                           <Input placeholder="Этаж" value={floor} onChange={handleFloorChange} background={'black'} color={'white'} w={'350px'} h={'30px'} />
                           <Input placeholder="Домофон" value={intercom} onChange={handleIntercomChange} background={'black'} color={'white'} w={'350px'} h={'30px'} />
                           <Input placeholder="Желаемое время доставки" value={desiredDeliveryTime} onChange={handleDesiredDeliveryTimeChange} background={'black'} color={'white'} w={'350px'} h={'30px'} />
                        </>
                     )}
                     <Input placeholder="Номер телефона" value={phoneNumber} onChange={handlePhoneNumberChange} background={'black'} color={'white'} w={'350px'} h={'30px'} />
                     <Input placeholder="На чье имя" value={orderName} onChange={handleOrderNameChange} background={'black'} color={'white'} w={'350px'} h={'30px'} />
                     {deliveryMethod === 'Самовывоз' && (
                        <Box>
                           <Text>Адрес для самовывоза: ул. Примерная, д. 1</Text>
                           <Text>Время работы: 9:00 - 18:00</Text>
                        </Box>
                     )}
                     <Select
                        placeholder="Способ оплаты"
                        value={paymentMethod}
                        onChange={handlePaymentMethodChange}
                        background={'black'}
                        color={'white'}
                        w={'350px'}
                        h={'30px'}
                     >
                        <option value="Картой онлайн">Картой онлайн</option>
                        {deliveryMethod === 'Самовывоз' && <option value="Картой при получении">Картой при получении</option>}
                     </Select>
                     {paymentMethod === 'Картой онлайн' && (
                        <>
                           <Input placeholder="Номер карты" value={cardNumber} onChange={handleCardNumberChange} background={'black'} color={'white'} w={'350px'} h={'30px'} />
                           <Input placeholder="Срок действия карты" value={cardExpiry} onChange={handleCardExpiryChange} background={'black'} color={'white'} w={'350px'} h={'30px'} />
                           <Input placeholder="CVV" value={cardCVV} onChange={handleCardCVVChange} background={'black'} color={'white'} w={'350px'} h={'30px'} />
                        </>
                     )}
                     <Button onClick={handlePlaceOrder} colorScheme="blue" width="100%">
                        Заказать
                     </Button>
                  </>
               )}
            </Stack>
         ) : (
            <Stack spacing={5} maxWidth="600px" mx="auto" textAlign="center">
               <Text fontSize="xl">Ваш заказ успешно оформлен!</Text>
               <Text fontSize="lg">Номер вашего заказа: {orderNumber}</Text>
               <Text fontSize="lg">Вы будете перенаправлены на главную страницу...</Text>
            </Stack>
         )}
      </Box>
   );
};

export default Checkout;
