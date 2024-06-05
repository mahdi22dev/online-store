/*
  Warnings:

  - Made the column `userId` on table `Orders` required. This step will fail if there are existing NULL values in that column.
  - Made the column `cartId` on table `Orders` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Orders" ALTER COLUMN "userId" SET NOT NULL,
ALTER COLUMN "cartId" SET NOT NULL;

-- CreateIndex
CREATE INDEX "Orders_orderid_idx" ON "Orders"("orderid");

-- CreateIndex
CREATE INDEX "Orders_sessionId_idx" ON "Orders"("sessionId");

-- AddForeignKey
ALTER TABLE "Orders" ADD CONSTRAINT "Orders_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
