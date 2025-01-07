/*
  Warnings:

  - You are about to drop the `UserSettings` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `examLogo` to the `Exam` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Exam" ADD COLUMN     "examLogo" TEXT NOT NULL;

-- DropTable
DROP TABLE "UserSettings";

-- CreateTable
CREATE TABLE "Years" (
    "id" TEXT NOT NULL,
    "yearName" TEXT NOT NULL,
    "yearShortName" TEXT NOT NULL,
    "examId" TEXT NOT NULL,
    "isVisible" BOOLEAN NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Years_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Years" ADD CONSTRAINT "Years_examId_fkey" FOREIGN KEY ("examId") REFERENCES "Exam"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
