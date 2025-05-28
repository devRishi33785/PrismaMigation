-- CreateTable
CREATE TABLE
    "AppConfig" (
        "id" TEXT NOT NULL,
        "key" TEXT NOT NULL,
        "value" TEXT NOT NULL,
        "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
        "updatedAt" TIMESTAMP(3),
        "deletedAt" TIMESTAMP(3),
        CONSTRAINT "AppConfig_pkey" PRIMARY KEY ("id")
    );