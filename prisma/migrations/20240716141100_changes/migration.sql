-- AlterTable
ALTER TABLE "Review" ALTER COLUMN "createdAt" DROP NOT NULL;

-- AlterTable
ALTER TABLE "Reviewimages" ALTER COLUMN "createdAt" DROP NOT NULL;

-- AlterTable
ALTER TABLE "Space" ALTER COLUMN "createdAt" DROP NOT NULL;

-- AlterTable
ALTER TABLE "user" ALTER COLUMN "createdAt" DROP NOT NULL;
