/*
  Warnings:

  - Added the required column `isVisible` to the `Exam` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Exam" ADD COLUMN     "isVisible" BOOLEAN NOT NULL;
