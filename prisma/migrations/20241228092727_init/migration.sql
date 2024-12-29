/*
  Warnings:

  - You are about to drop the column `answer` on the `Question` table. All the data in the column will be lost.
  - You are about to drop the column `description` on the `Question` table. All the data in the column will be lost.
  - You are about to drop the column `explanation` on the `Question` table. All the data in the column will be lost.
  - You are about to drop the column `hint` on the `Question` table. All the data in the column will be lost.
  - You are about to drop the column `title` on the `Question` table. All the data in the column will be lost.
  - You are about to drop the `QuestionData` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `isRemoved` to the `Question` table without a default value. This is not possible if the table is not empty.
  - Added the required column `level` to the `Question` table without a default value. This is not possible if the table is not empty.
  - Added the required column `questionStatement` to the `Question` table without a default value. This is not possible if the table is not empty.
  - Added the required column `subjectId` to the `Question` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "QuestionData" DROP CONSTRAINT "QuestionData_questionId_fkey";

-- AlterTable
ALTER TABLE "Question" DROP COLUMN "answer",
DROP COLUMN "description",
DROP COLUMN "explanation",
DROP COLUMN "hint",
DROP COLUMN "title",
ADD COLUMN     "isRemoved" BOOLEAN NOT NULL,
ADD COLUMN     "level" INTEGER NOT NULL,
ADD COLUMN     "questionImage" TEXT,
ADD COLUMN     "questionStatement" TEXT NOT NULL,
ADD COLUMN     "subjectId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "UserSettings" ADD COLUMN     "showAttemptInsightData" BOOLEAN NOT NULL DEFAULT true;

-- DropTable
DROP TABLE "QuestionData";

-- AddForeignKey
ALTER TABLE "Question" ADD CONSTRAINT "Question_subjectId_fkey" FOREIGN KEY ("subjectId") REFERENCES "Subject"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
