/*
  Warnings:

  - Added the required column `isVisible` to the `Years` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Years" ADD COLUMN     "isVisible" BOOLEAN NOT NULL;
