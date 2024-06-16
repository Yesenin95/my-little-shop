/*
  Warnings:

  - Added the required column `carbohydrates` to the `Cake` table without a default value. This is not possible if the table is not empty.
  - Added the required column `fats` to the `Cake` table without a default value. This is not possible if the table is not empty.
  - Added the required column `mass` to the `Cake` table without a default value. This is not possible if the table is not empty.
  - Added the required column `protein` to the `Cake` table without a default value. This is not possible if the table is not empty.
  - Added the required column `carbohydrates` to the `Cupcake` table without a default value. This is not possible if the table is not empty.
  - Added the required column `fats` to the `Cupcake` table without a default value. This is not possible if the table is not empty.
  - Added the required column `mass` to the `Cupcake` table without a default value. This is not possible if the table is not empty.
  - Added the required column `protein` to the `Cupcake` table without a default value. This is not possible if the table is not empty.
  - Added the required column `carbohydrates` to the `Pastry` table without a default value. This is not possible if the table is not empty.
  - Added the required column `fats` to the `Pastry` table without a default value. This is not possible if the table is not empty.
  - Added the required column `mass` to the `Pastry` table without a default value. This is not possible if the table is not empty.
  - Added the required column `protein` to the `Pastry` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Cake" ADD COLUMN     "carbohydrates" TEXT NOT NULL,
ADD COLUMN     "fats" TEXT NOT NULL,
ADD COLUMN     "mass" TEXT NOT NULL,
ADD COLUMN     "protein" TEXT NOT NULL,
ADD COLUMN     "time" TEXT;

-- AlterTable
ALTER TABLE "Cupcake" ADD COLUMN     "carbohydrates" TEXT NOT NULL,
ADD COLUMN     "fats" TEXT NOT NULL,
ADD COLUMN     "mass" TEXT NOT NULL,
ADD COLUMN     "protein" TEXT NOT NULL,
ADD COLUMN     "time" TEXT;

-- AlterTable
ALTER TABLE "Pastry" ADD COLUMN     "carbohydrates" TEXT NOT NULL,
ADD COLUMN     "fats" TEXT NOT NULL,
ADD COLUMN     "mass" TEXT NOT NULL,
ADD COLUMN     "protein" TEXT NOT NULL,
ADD COLUMN     "time" TEXT;
