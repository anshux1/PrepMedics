-- DropForeignKey
ALTER TABLE "Question" DROP CONSTRAINT "Question_chapterId_fkey";

-- DropForeignKey
ALTER TABLE "Question" DROP CONSTRAINT "Question_subjectId_fkey";

-- DropForeignKey
ALTER TABLE "Question" DROP CONSTRAINT "Question_yearsId_fkey";

-- AlterTable
ALTER TABLE "Question" ALTER COLUMN "chapterId" DROP NOT NULL,
ALTER COLUMN "yearsId" DROP NOT NULL,
ALTER COLUMN "subjectId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "Question" ADD CONSTRAINT "Question_chapterId_fkey" FOREIGN KEY ("chapterId") REFERENCES "Chapter"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Question" ADD CONSTRAINT "Question_yearsId_fkey" FOREIGN KEY ("yearsId") REFERENCES "Years"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Question" ADD CONSTRAINT "Question_subjectId_fkey" FOREIGN KEY ("subjectId") REFERENCES "Subject"("id") ON DELETE SET NULL ON UPDATE CASCADE;
