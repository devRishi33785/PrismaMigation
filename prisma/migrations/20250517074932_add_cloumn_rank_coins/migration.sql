/*
  Warnings:

  - Added the required column `rank` to the `Coins` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Coins" ADD COLUMN     "rank" INTEGER NOT NULL;
