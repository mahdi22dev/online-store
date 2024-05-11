/*
  Warnings:

  - Added the required column `cost` to the `Cart` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Cart" ADD COLUMN     "cost" INTEGER NOT NULL,
ADD COLUMN     "currencyCode" TEXT NOT NULL DEFAULT 'USA';
