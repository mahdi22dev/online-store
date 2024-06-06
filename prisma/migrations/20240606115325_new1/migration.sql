-- DropForeignKey
ALTER TABLE "ProductItem" DROP CONSTRAINT "ProductItem_OrderId_fkey";

-- AlterTable
ALTER TABLE "ProductItem" ALTER COLUMN "OrderId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "ProductItem" ADD CONSTRAINT "ProductItem_OrderId_fkey" FOREIGN KEY ("OrderId") REFERENCES "Orders"("id") ON DELETE SET NULL ON UPDATE CASCADE;
