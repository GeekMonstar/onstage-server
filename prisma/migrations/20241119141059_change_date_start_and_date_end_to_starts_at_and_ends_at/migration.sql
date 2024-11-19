/*
  Warnings:

  - You are about to drop the column `date_end` on the `bookings` table. All the data in the column will be lost.
  - You are about to drop the column `date_start` on the `bookings` table. All the data in the column will be lost.
  - Added the required column `ends_at` to the `bookings` table without a default value. This is not possible if the table is not empty.
  - Added the required column `starts_at` to the `bookings` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "bookings" DROP COLUMN "date_end",
DROP COLUMN "date_start",
ADD COLUMN     "ends_at" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "starts_at" TIMESTAMP(3) NOT NULL;
