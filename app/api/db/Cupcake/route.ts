import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET() {
   try {
      const cupcakes = await prisma.cupcake.findMany();
      return NextResponse.json(cupcakes);
   } catch (error) {
      console.error('Error fetching cupcakes:', error);
      return NextResponse.error();
   }
}