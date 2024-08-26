/*
  Warnings:

  - You are about to drop the column `verificationToken` on the `user` table. All the data in the column will be lost.
  - You are about to drop the column `verified` on the `user` table. All the data in the column will be lost.
  - You are about to drop the `VerificationToken` table. If the table is not empty, all the data it contains will be lost.

*/
-- AlterTable
ALTER TABLE "user" DROP COLUMN "verificationToken",
DROP COLUMN "verified";

-- DropTable
DROP TABLE "VerificationToken";

-- CreateIndex
CREATE INDEX "Review_id_spaceId_idx" ON "Review"("id", "spaceId");

-- CreateIndex
CREATE INDEX "Reviewimages_id_reviewId_idx" ON "Reviewimages"("id", "reviewId");
