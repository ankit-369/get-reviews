-- CreateIndex
CREATE INDEX "Review_spaceId_idx" ON "Review"("spaceId");

-- CreateIndex
CREATE INDEX "Reviewimages_reviewId_idx" ON "Reviewimages"("reviewId");

-- AddForeignKey
ALTER TABLE "Reviewimages" ADD CONSTRAINT "Reviewimages_reviewId_fkey" FOREIGN KEY ("reviewId") REFERENCES "Review"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
