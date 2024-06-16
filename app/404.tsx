import Head from "next/head";
import { Box } from "@chakra-ui/react";


export default function ErrorPage() {
   return <>
      <Head>
         <title>Страница не найдена</title>
      </Head>
      <Box>
         Упс
      </Box>
   </>
}