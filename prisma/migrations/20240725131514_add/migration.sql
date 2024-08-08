/*
  Warnings:

  - You are about to drop the column `heart` on the `Space` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Review" ADD COLUMN     "heart" TEXT NOT NULL DEFAULT 'false';

-- AlterTable
ALTER TABLE "Space" DROP COLUMN "heart";
