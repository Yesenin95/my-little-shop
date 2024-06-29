'use client';

import { Inter } from 'next/font/google';
import Footer from './components/footer/page';
import Header from './components/header/page';
import { SessionProvider } from "next-auth/react";
import './globals.css';
import { Grid, GridItem } from '@chakra-ui/react';
import { ClientProvider } from './components/clientProvider/cientProvider';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
   children,
}: {
   children: React.ReactNode;
}) {
   return (
      <html lang="en">
         <body
            className={inter.className}
            style={{
               margin: 0,
               minHeight: '100vh',
               backgroundImage: 'url(/bg.jpg)',
               backgroundRepeat: 'no-repeat',
               backgroundPosition: 'center',
               backgroundSize: 'cover',
               color: 'black',
            }}
         >
            <ClientProvider>
               <Grid
                  templateAreas={`
                           "header header"
                           "children children"
                           "footer footer"
                        `}
                  gridTemplateRows={'100px 1fr 100px'}
                  height="100vh"
               >
                  <GridItem area={'header'}>
                     <Header />
                  </GridItem>
                  <GridItem area={'children'} overflowY="auto" padding={'0 50px 20px 50px'}>
                     {children}
                  </GridItem>
                  <GridItem area={'footer'}>
                     <Footer />
                  </GridItem>
               </Grid>
            </ClientProvider>
         </body>
      </html>
   );
}
