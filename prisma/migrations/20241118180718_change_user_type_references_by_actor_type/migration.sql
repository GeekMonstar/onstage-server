/*
  Warnings:

  - You are about to drop the column `user_id` on the `comments` table. All the data in the column will be lost.
  - You are about to drop the column `user_id` on the `posts` table. All the data in the column will be lost.
  - You are about to drop the column `user_type` on the `posts` table. All the data in the column will be lost.
  - Added the required column `auhor_type` to the `comments` table without a default value. This is not possible if the table is not empty.
  - Added the required column `author_id` to the `comments` table without a default value. This is not possible if the table is not empty.
  - Changed the type of `autor_type` on the `messages` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Added the required column `auhor_type` to the `posts` table without a default value. This is not possible if the table is not empty.
  - Added the required column `author_id` to the `posts` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "CoversationType" AS ENUM ('PRIVATE', 'GROUP');

-- CreateEnum
CREATE TYPE "ActorType" AS ENUM ('ARTIST', 'HOST');

-- AlterTable
ALTER TABLE "comments" DROP COLUMN "user_id",
ADD COLUMN     "auhor_type" "ActorType" NOT NULL,
ADD COLUMN     "author_id" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "messages" DROP COLUMN "autor_type",
ADD COLUMN     "autor_type" "ActorType" NOT NULL;

-- AlterTable
ALTER TABLE "posts" DROP COLUMN "user_id",
DROP COLUMN "user_type",
ADD COLUMN     "auhor_type" "ActorType" NOT NULL,
ADD COLUMN     "author_id" TEXT NOT NULL;

-- DropEnum
DROP TYPE "autorType";

-- DropEnum
DROP TYPE "coversationType";
