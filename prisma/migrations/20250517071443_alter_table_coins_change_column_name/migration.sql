/*
  Warnings:

  - You are about to drop the column `volmne24a` on the `Coins` table. All the data in the column will be lost.
  - You are about to drop the column `volume24` on the `Coins` table. All the data in the column will be lost.
  - Added the required column `volume24a` to the `Coins` table without a default value. This is not possible if the table is not empty.
  - Added the required column `volumn24` to the `Coins` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Coins" DROP COLUMN "volmne24a",
DROP COLUMN "volume24",
ADD COLUMN     "volume24a" TEXT NOT NULL,
ADD COLUMN     "volumn24" TEXT NOT NULL;
