/*
  Warnings:

  - You are about to drop the column `productId` on the `CartItem` table. All the data in the column will be lost.
  - You are about to drop the `Product` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Cake" DROP CONSTRAINT "Cake_id_fkey";

-- DropForeignKey
ALTER TABLE "CartItem" DROP CONSTRAINT "CartItem_productId_fkey";

-- DropForeignKey
ALTER TABLE "Cupcake" DROP CONSTRAINT "Cupcake_id_fkey";

-- DropForeignKey
ALTER TABLE "Pastry" DROP CONSTRAINT "Pastry_id_fkey";

-- AlterTable
ALTER TABLE "CartItem" DROP COLUMN "productId",
ADD COLUMN     "cakeId" TEXT,
ADD COLUMN     "cupcakeId" TEXT,
ADD COLUMN     "pastryId" TEXT;

-- DropTable
DROP TABLE "Product";

-- AddForeignKey
ALTER TABLE "CartItem" ADD CONSTRAINT "CartItem_cupcakeId_fkey" FOREIGN KEY ("cupcakeId") REFERENCES "Cupcake"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CartItem" ADD CONSTRAINT "CartItem_cakeId_fkey" FOREIGN KEY ("cakeId") REFERENCES "Cake"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CartItem" ADD CONSTRAINT "CartItem_pastryId_fkey" FOREIGN KEY ("pastryId") REFERENCES "Pastry"("id") ON DELETE SET NULL ON UPDATE CASCADE;
