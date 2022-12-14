/*
  Warnings:

  - You are about to drop the column `docId` on the `File` table. All the data in the column will be lost.
  - You are about to drop the column `value` on the `File` table. All the data in the column will be lost.
  - You are about to drop the column `companyId` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `email` on the `User` table. All the data in the column will be lost.
  - You are about to drop the `Company` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `DocOnRoles` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Document` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Role` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `UserOnRoles` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `createdBy` to the `File` table without a default value. This is not possible if the table is not empty.
  - Made the column `name` on table `User` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "DocOnRoles" DROP CONSTRAINT "DocOnRoles_docId_fkey";

-- DropForeignKey
ALTER TABLE "DocOnRoles" DROP CONSTRAINT "DocOnRoles_roleId_fkey";

-- DropForeignKey
ALTER TABLE "Document" DROP CONSTRAINT "Document_companyId_fkey";

-- DropForeignKey
ALTER TABLE "File" DROP CONSTRAINT "File_docId_fkey";

-- DropForeignKey
ALTER TABLE "Role" DROP CONSTRAINT "Role_companyId_fkey";

-- DropForeignKey
ALTER TABLE "User" DROP CONSTRAINT "User_companyId_fkey";

-- DropForeignKey
ALTER TABLE "UserOnRoles" DROP CONSTRAINT "UserOnRoles_roleId_fkey";

-- DropForeignKey
ALTER TABLE "UserOnRoles" DROP CONSTRAINT "UserOnRoles_userId_fkey";

-- DropIndex
DROP INDEX "User_email_key";

-- AlterTable
ALTER TABLE "File" DROP COLUMN "docId",
DROP COLUMN "value",
ADD COLUMN     "createdBy" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "User" DROP COLUMN "companyId",
DROP COLUMN "email",
ALTER COLUMN "name" SET NOT NULL;

-- DropTable
DROP TABLE "Company";

-- DropTable
DROP TABLE "DocOnRoles";

-- DropTable
DROP TABLE "Document";

-- DropTable
DROP TABLE "Role";

-- DropTable
DROP TABLE "UserOnRoles";

-- CreateTable
CREATE TABLE "Signature" (
    "id" TEXT NOT NULL,
    "createdBy" TEXT NOT NULL,
    "publicKey" TEXT NOT NULL,
    "privateKey" TEXT NOT NULL,
    "fileId" TEXT NOT NULL,

    CONSTRAINT "Signature_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "File" ADD CONSTRAINT "File_createdBy_fkey" FOREIGN KEY ("createdBy") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Signature" ADD CONSTRAINT "Signature_createdBy_fkey" FOREIGN KEY ("createdBy") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Signature" ADD CONSTRAINT "Signature_fileId_fkey" FOREIGN KEY ("fileId") REFERENCES "File"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
