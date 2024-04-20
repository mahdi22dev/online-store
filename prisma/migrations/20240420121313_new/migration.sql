-- AlterTable
ALTER TABLE "Cart" ADD COLUMN     "createdAt" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP;

-- AlterTable
ALTER TABLE "ProductItem" ADD COLUMN     "createdAt" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP;

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "createdAt" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
ALTER COLUMN "emailVerified" SET DEFAULT false;

-- CreateIndex
CREATE INDEX "Cart_id_idx" ON "Cart"("id");

-- CreateIndex
CREATE INDEX "ProductItem_id_idx" ON "ProductItem"("id");

-- CreateIndex
CREATE INDEX "ProductItem_productId_idx" ON "ProductItem"("productId");

-- CreateIndex
CREATE INDEX "ProductItem_CartId_idx" ON "ProductItem"("CartId");

-- CreateIndex
CREATE INDEX "User_id_idx" ON "User"("id");

-- CreateIndex
CREATE INDEX "User_userId_idx" ON "User"("userId");
