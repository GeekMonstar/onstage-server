/*
  Warnings:

  - Added the required column `user_id` to the `verification_tokens` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "verification_tokens" ADD COLUMN     "user_id" TEXT NOT NULL;
