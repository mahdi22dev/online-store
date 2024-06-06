-- DropForeignKey
ALTER TABLE "ProductItem" DROP CONSTRAINT "ProductItem_CartId_fkey";

-- AlterTable
ALTER TABLE "ProductItem" ALTER COLUMN "CartId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "ProductItem" ADD CONSTRAINT "ProductItem_CartId_fkey" FOREIGN KEY ("CartId") REFERENCES "Cart"("id") ON DELETE SET NULL ON UPDATE CASCADE;
