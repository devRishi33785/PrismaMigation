/*
  Warnings:

  - You are about to drop the column `appVersion` on the `Devices` table. All the data in the column will be lost.
  - You are about to drop the column `deviceSignature` on the `Devices` table. All the data in the column will be lost.
  - You are about to drop the column `deviceType` on the `Devices` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Devices" DROP COLUMN "appVersion",
DROP COLUMN "deviceSignature",
DROP COLUMN "deviceType";
