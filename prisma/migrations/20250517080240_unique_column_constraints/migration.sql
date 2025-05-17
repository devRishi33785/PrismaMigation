/*
  Warnings:

  - A unique constraint covering the columns `[coinId]` on the table `Coins` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Coins_coinId_key" ON "Coins"("coinId");
