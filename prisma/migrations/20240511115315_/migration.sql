/*
  Warnings:

  - You are about to drop the column `cost` on the `Cart` table. All the data in the column will be lost.
  - You are about to drop the column `currencyCode` on the `Cart` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Cart" DROP COLUMN "cost",
DROP COLUMN "currencyCode";

-- CreateTable
CREATE TABLE "Orders" (
    "id" TEXT NOT NULL,
    "userId" TEXT,
    "carCartIdtId" TEXT,
    "createdAt" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "cost" INTEGER NOT NULL DEFAULT 0,
    "currencyCode" TEXT NOT NULL DEFAULT 'USA',

    CONSTRAINT "Orders_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "Orders_id_idx" ON "Orders"("id");
