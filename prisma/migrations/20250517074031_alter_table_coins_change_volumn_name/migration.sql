/*
  Warnings:

  - You are about to drop the column `volumn24` on the `Coins` table. All the data in the column will be lost.
  - Added the required column `volume24` to the `Coins` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Coins" DROP COLUMN "volumn24",
ADD COLUMN     "volume24" TEXT NOT NULL;
