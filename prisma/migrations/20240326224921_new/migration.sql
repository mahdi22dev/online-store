/*
  Warnings:

  - You are about to drop the `NewsLetter` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "NewsLetter";

-- CreateTable
CREATE TABLE "Cartitems" (
    "id" TEXT NOT NULL,
    "productId" TEXT NOT NULL,
    "quantity" INTEGER NOT NULL,
    "userId" TEXT,

    CONSTRAINT "Cartitems_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CustomProduct" (
    "id" TEXT NOT NULL,

    CONSTRAINT "CustomProduct_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Cartitems_productId_key" ON "Cartitems"("productId");

-- AddForeignKey
ALTER TABLE "Cartitems" ADD CONSTRAINT "Cartitems_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;
