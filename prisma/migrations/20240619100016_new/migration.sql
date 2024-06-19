-- DropIndex
DROP INDEX "Cart_id_idx";

-- DropIndex
DROP INDEX "Orders_id_idx";

-- DropIndex
DROP INDEX "Orders_orderid_idx";

-- DropIndex
DROP INDEX "Orders_sessionId_idx";

-- DropIndex
DROP INDEX "ProductItem_CartId_idx";

-- DropIndex
DROP INDEX "ProductItem_id_idx";

-- DropIndex
DROP INDEX "User_id_idx";

-- DropIndex
DROP INDEX "User_userId_idx";

-- CreateIndex
CREATE INDEX "Orders_orderid_userId_idx" ON "Orders"("orderid", "userId");

-- CreateIndex
CREATE INDEX "ProductItem_OrderId_idx" ON "ProductItem"("OrderId");

-- CreateIndex
CREATE INDEX "User_email_idx" ON "User"("email");
