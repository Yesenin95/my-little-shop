'use client'

import { Inter } from 'next/font/google';
import { ClientProvider } from './components/clientProvider/cientProvider';
import { CartProvider } from './components/cartContext/cartContext'
import Footer from './components/footer/page';
import Header from './components/header/page';

import './globals.css';
import { ChakraProvider } from '@chakra-ui/react';


const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
   children,
}: {
   children: React.ReactNode;
}) {
   return (
      <html lang="en">
         <body className={inter.className} style={{
            margin: 0, height: '100vh', display: 'flex', flexDirection: 'column', backgroundImage: 'url(/bg.jpg)', backgroundRepeat: 'no-repeat', backgroundPosition: 'center', backgroundSize:'cover', color:'black' }}>
            <ChakraProvider>
               <ClientProvider>            
                     <Header />
                     <div className="container" style={{ flex: 1, width: '100vw', height:'100vh', paddingTop:'100px', margin: '20px auto'}}>
                        {children}
                     </div>
                     <Footer />
               </ClientProvider>
            </ChakraProvider>
         </body>
      </html>
   );
}
