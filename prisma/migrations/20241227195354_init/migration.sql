/*
  Warnings:

  - Added the required column `heldOn` to the `Years` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Years" ADD COLUMN     "heldOn" TIMESTAMP(3) NOT NULL;
