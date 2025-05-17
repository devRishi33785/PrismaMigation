-- CreateEnum
CREATE TYPE "Role" AS ENUM ('ADMIN', 'USER');

-- CreateTable
CREATE TABLE "Users" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "firstName" TEXT,
    "lastName" TEXT,
    "provider" TEXT,
    "providerId" TEXT,
    "referralCode" TEXT,
    "countryId" INTEGER,
    "phone" TEXT,
    "dateOfBirth" TEXT,
    "acceptedTerms" BOOLEAN NOT NULL DEFAULT false,
    "mfaEnabled" BOOLEAN NOT NULL DEFAULT false,
    "mfaSecret" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3),
    "deletedAt" TIMESTAMP(3),

    CONSTRAINT "Users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Roles" (
    "id" TEXT NOT NULL,
    "role" "Role" NOT NULL DEFAULT 'USER',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3),
    "deletedAt" TIMESTAMP(3),

    CONSTRAINT "Roles_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UserRoleMapping" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "roleId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3),
    "deletedAt" TIMESTAMP(3),

    CONSTRAINT "UserRoleMapping_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Coins" (
    "id" TEXT NOT NULL,
    "coinId" BIGINT NOT NULL,
    "nameId" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "priceUsd" TEXT NOT NULL,
    "percentChange24h" TEXT NOT NULL,
    "percentChange1h" TEXT NOT NULL,
    "percentChange7d" TEXT NOT NULL,
    "priceBtc" TEXT NOT NULL,
    "volume24" TEXT NOT NULL,
    "volmne24a" TEXT NOT NULL,
    "symbol" TEXT NOT NULL,

    CONSTRAINT "Coins_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Users_email_key" ON "Users"("email");

-- AddForeignKey
ALTER TABLE "UserRoleMapping" ADD CONSTRAINT "UserRoleMapping_userId_fkey" FOREIGN KEY ("userId") REFERENCES "Users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserRoleMapping" ADD CONSTRAINT "UserRoleMapping_roleId_fkey" FOREIGN KEY ("roleId") REFERENCES "Roles"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
