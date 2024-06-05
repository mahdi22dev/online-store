/*
  Warnings:

  - You are about to drop the column `carCartIdtId` on the `Orders` table. All the data in the column will be lost.
  - Added the required column `orderid` to the `Orders` table without a default value. This is not possible if the table is not empty.
  - Added the required column `sessionId` to the `Orders` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Orders" DROP COLUMN "carCartIdtId",
ADD COLUMN     "cartId" TEXT,
ADD COLUMN     "isPaid" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "orderid" TEXT NOT NULL,
ADD COLUMN     "sessionId" TEXT NOT NULL;
