'use client'
import {
   Box,
   Button,
   Container,
   Flex,
   FormControl,
   FormLabel,
   Input,
   Modal,
   ModalBody,
   ModalCloseButton,
   ModalContent,
   ModalFooter,
   ModalHeader,
   ModalOverlay,
   useDisclosure,
   Text,
   Textarea,
   Link
} from "@chakra-ui/react";
import React from "react";
import Image from "next/image";

export default function Contacts() {
   const { isOpen, onOpen, onClose } = useDisclosure();
   const [isMapModalOpen, setIsMapModalOpen] = React.useState(false);
   const [address, setAddress] = React.useState("");
   const initialRef = React.useRef(null);
   const finalRef = React.useRef(null);

   const handleAddressClick = (address: string) => {
      setAddress(address);
      setIsMapModalOpen(true);
   };

   const handleMapChoice = (mapType: string) => {
      let url;
      if (mapType === "google") {
         url = `https://www.google.com/maps?q=${encodeURIComponent(address)}`;
      } else if (mapType === "2gis") {
         url = `https://2gis.ru/search/${encodeURIComponent(address)}`;
      }
      window.open(url, "_blank");
      setIsMapModalOpen(false);
   };

   const addressText = "г.Казань ул.Маршала Чуйкова д.34";
   return (
      <>
         <Container display={"flex"} alignItems={'center'} justifyContent={'center'} h={'100vh'}>
            <Flex alignItems={'center'} justifyContent={'center'} gap={'50px'}>
               <Box>
                  <Flex flexDirection={'column'} gap={'20px'} border={'1px solid black'} borderRadius={'10px'} p={'15px'}>
                     <Text>Наш телефон: <Link href="tel:+7999999999">+7999999999</Link></Text>
                     <Text>Наш адрес: <Link onClick={() => handleAddressClick(addressText)} cursor="pointer">{addressText}</Link></Text>
                  </Flex>
               </Box>
               <Box>
                  <Button onClick={onOpen}>Напишите нам</Button>
                  <Modal
                     initialFocusRef={initialRef}
                     finalFocusRef={finalRef}
                     isOpen={isOpen}
                     onClose={onClose}
                  >
                     <ModalOverlay />
                     <ModalContent>
                        <ModalHeader>Свяжитесь с нами</ModalHeader>
                        <ModalCloseButton />
                        <ModalBody pb={6}>
                           <FormControl>
                              <FormLabel>Ваше имя</FormLabel>
                              <Input ref={initialRef} placeholder="Введите ваше имя" />
                           </FormControl>
                           <FormControl mt={4}>
                              <FormLabel>Ваше сообщение</FormLabel>
                              <Textarea placeholder="Введите ваше сообщение" />
                           </FormControl>
                        </ModalBody>
                        <ModalFooter>
                           <Button colorScheme="blue" mr={3}>
                              Отправить
                           </Button>
                           <Button onClick={onClose}>Отмена</Button>
                        </ModalFooter>
                     </ModalContent>
                  </Modal>
               </Box>
            </Flex>
         </Container>
         <Modal isOpen={isMapModalOpen} onClose={() => setIsMapModalOpen(false)}>
            <ModalOverlay />
            <ModalContent>
               <ModalHeader>Выберите карту</ModalHeader>
               <ModalCloseButton />
               <ModalBody>
                  <Button onClick={() => handleMapChoice("google")} colorScheme="blue" mr={3}>
                     Google Maps
                  </Button>
                  <Button onClick={() => handleMapChoice("2gis")}>
                     2GIS
                  </Button>
               </ModalBody>
            </ModalContent>
         </Modal>
      </>
   );
}
