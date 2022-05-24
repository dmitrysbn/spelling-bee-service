/*
  Warnings:

  - Added the required column `letters` to the `Puzzle` table without a default value. This is not possible if the table is not empty.
  - Added the required column `mainLetter` to the `Puzzle` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Puzzle" ADD COLUMN     "letters" TEXT NOT NULL,
ADD COLUMN     "mainLetter" TEXT NOT NULL;
