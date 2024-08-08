/*
  Warnings:

  - The `createdAt` column on the `Review` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `updatedAt` column on the `Review` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `createdAt` column on the `Reviewimages` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `updatedAt` column on the `Reviewimages` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `createdAt` column on the `Space` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `updatedAt` column on the `Space` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `createdAt` column on the `user` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `updatedAt` column on the `user` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "Review" DROP COLUMN "createdAt",
ADD COLUMN     "createdAt" INTEGER NOT NULL DEFAULT 0,
DROP COLUMN "updatedAt",
ADD COLUMN     "updatedAt" INTEGER;

-- AlterTable
ALTER TABLE "Reviewimages" DROP COLUMN "createdAt",
ADD COLUMN     "createdAt" INTEGER NOT NULL DEFAULT 0,
DROP COLUMN "updatedAt",
ADD COLUMN     "updatedAt" INTEGER;

-- AlterTable
ALTER TABLE "Space" DROP COLUMN "createdAt",
ADD COLUMN     "createdAt" INTEGER NOT NULL DEFAULT 0,
DROP COLUMN "updatedAt",
ADD COLUMN     "updatedAt" INTEGER;

-- AlterTable
ALTER TABLE "user" DROP COLUMN "createdAt",
ADD COLUMN     "createdAt" INTEGER NOT NULL DEFAULT 0,
DROP COLUMN "updatedAt",
ADD COLUMN     "updatedAt" INTEGER;
