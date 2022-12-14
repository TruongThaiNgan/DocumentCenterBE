/*
  Warnings:

  - Added the required column `role` to the `Signature` table without a default value. This is not possible if the table is not empty.
  - Added the required column `token` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "Role" AS ENUM ('VIEW', 'VIEW_AND_EDIT', 'DOWNLOAD');

-- AlterTable
ALTER TABLE "Signature" ADD COLUMN     "role" "Role" NOT NULL;

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "token" TEXT NOT NULL;
