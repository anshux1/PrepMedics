/*
  Warnings:

  - Added the required column `SyllabusCategory` to the `Chapter` table without a default value. This is not possible if the table is not empty.
  - Added the required column `classId` to the `Chapter` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Chapter" ADD COLUMN     "SyllabusCategory" TEXT NOT NULL,
ADD COLUMN     "classId" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "Chapter" ADD CONSTRAINT "Chapter_classId_fkey" FOREIGN KEY ("classId") REFERENCES "Class"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
