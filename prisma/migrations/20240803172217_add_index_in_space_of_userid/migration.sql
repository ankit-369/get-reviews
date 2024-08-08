-- DropForeignKey
ALTER TABLE "Reviewimages" DROP CONSTRAINT "Reviewimages_reviewId_fkey";

-- CreateIndex
CREATE INDEX "Space_userId_idx" ON "Space"("userId");
