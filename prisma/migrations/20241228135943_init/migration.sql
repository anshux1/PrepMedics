/*
  Warnings:

  - Made the column `examId` on table `Question` required. This step will fail if there are existing NULL values in that column.
  - Made the column `chapterId` on table `Question` required. This step will fail if there are existing NULL values in that column.
  - Made the column `yearsId` on table `Question` required. This step will fail if there are existing NULL values in that column.
  - Made the column `subjectId` on table `Question` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "Question" DROP CONSTRAINT "Question_chapterId_fkey";

-- DropForeignKey
ALTER TABLE "Question" DROP CONSTRAINT "Question_examId_fkey";

-- DropForeignKey
ALTER TABLE "Question" DROP CONSTRAINT "Question_subjectId_fkey";

-- DropForeignKey
ALTER TABLE "Question" DROP CONSTRAINT "Question_yearsId_fkey";

-- AlterTable
ALTER TABLE "Question" ALTER COLUMN "examId" SET NOT NULL,
ALTER COLUMN "chapterId" SET NOT NULL,
ALTER COLUMN "yearsId" SET NOT NULL,
ALTER COLUMN "subjectId" SET NOT NULL;

-- AddForeignKey
ALTER TABLE "Question" ADD CONSTRAINT "Question_chapterId_fkey" FOREIGN KEY ("chapterId") REFERENCES "Chapter"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Question" ADD CONSTRAINT "Question_yearsId_fkey" FOREIGN KEY ("yearsId") REFERENCES "Years"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Question" ADD CONSTRAINT "Question_subjectId_fkey" FOREIGN KEY ("subjectId") REFERENCES "Subject"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Question" ADD CONSTRAINT "Question_examId_fkey" FOREIGN KEY ("examId") REFERENCES "Exam"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
