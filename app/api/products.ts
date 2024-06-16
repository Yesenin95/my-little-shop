// pages/api/products.ts
import { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
   const { category } = req.query;

   try {
      let products;
      if (category === 'cupcake') {
         products = await prisma.cupcake.findMany();
      } else if (category === 'cake') {
         products = await prisma.cake.findMany();
      } else if (category === 'pastry') {
         products = await prisma.pastry.findMany();
      } else {
         return res.status(400).json({ error: 'Invalid category' });
      }

      res.status(200).json(products);
   } catch (error) {
      console.error('Error fetching products:', error);
      res.status(500).json({ error: 'Internal Server Error' });
   }
}
