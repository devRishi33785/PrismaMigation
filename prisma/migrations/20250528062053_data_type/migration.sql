/*
Warnings:

- Added the required column `type` to the `AppConfig` table without a default value. This is not possible if the table is not empty.

 */
-- AlterTable
ALTER TABLE "AppConfig"
ADD COLUMN "type" TEXT NOT NULL;