-- AlterTable
ALTER TABLE "ProductItem" ADD COLUMN     "OrderId" TEXT NOT NULL DEFAULT '';

-- AddForeignKey
ALTER TABLE "ProductItem" ADD CONSTRAINT "ProductItem_OrderId_fkey" FOREIGN KEY ("OrderId") REFERENCES "Orders"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
