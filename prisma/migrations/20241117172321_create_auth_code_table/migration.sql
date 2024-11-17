-- CreateTable
CREATE TABLE "auth_codes" (
    "id" TEXT NOT NULL,
    "code" TEXT NOT NULL,
    "expires" TIMESTAMP(3) NOT NULL,
    "is_expired" BOOLEAN NOT NULL,
    "user_id" TEXT NOT NULL,
    "account_id" TEXT NOT NULL,

    CONSTRAINT "auth_codes_pkey" PRIMARY KEY ("id")
);
