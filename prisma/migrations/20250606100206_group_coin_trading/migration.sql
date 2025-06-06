-- CreateTable
CREATE TABLE "TradingGroup" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "baseCoinId" TEXT NOT NULL,
    "quoteCoinId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3),
    "deletedAt" TIMESTAMP(3),

    CONSTRAINT "TradingGroup_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "GroupTrade" (
    "id" TEXT NOT NULL,
    "groupId" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "amountBase" DOUBLE PRECISION NOT NULL,
    "amountQuote" DOUBLE PRECISION NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "GroupTrade_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "TradingGroup_name_key" ON "TradingGroup"("name");

-- CreateIndex
CREATE INDEX "TradingGroup_name_idx" ON "TradingGroup"("name");

-- CreateIndex
CREATE INDEX "GroupTrade_groupId_userId_idx" ON "GroupTrade"("groupId", "userId");

-- CreateIndex
CREATE INDEX "Coins_coinId_idx" ON "Coins"("coinId");

-- CreateIndex
CREATE INDEX "Devices_userId_idx" ON "Devices"("userId");

-- CreateIndex
CREATE INDEX "Users_email_idx" ON "Users"("email");

-- AddForeignKey
ALTER TABLE "TradingGroup" ADD CONSTRAINT "TradingGroup_baseCoinId_fkey" FOREIGN KEY ("baseCoinId") REFERENCES "Coins"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TradingGroup" ADD CONSTRAINT "TradingGroup_quoteCoinId_fkey" FOREIGN KEY ("quoteCoinId") REFERENCES "Coins"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "GroupTrade" ADD CONSTRAINT "GroupTrade_groupId_fkey" FOREIGN KEY ("groupId") REFERENCES "TradingGroup"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "GroupTrade" ADD CONSTRAINT "GroupTrade_userId_fkey" FOREIGN KEY ("userId") REFERENCES "Users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
