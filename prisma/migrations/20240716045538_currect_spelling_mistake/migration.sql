/*
  Warnings:

  - You are about to drop the column `imege` on the `Reviewimages` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Reviewimages" DROP COLUMN "imege",
ADD COLUMN     "image" TEXT;
