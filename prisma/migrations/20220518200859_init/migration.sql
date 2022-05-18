-- CreateTable
CREATE TABLE "Puzzle" (
    "id" TEXT NOT NULL,
    "words" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Puzzle_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Score" (
    "id" TEXT NOT NULL,
    "score" INTEGER NOT NULL,
    "words" TEXT NOT NULL,
    "complete" BOOLEAN NOT NULL DEFAULT false,
    "userId" TEXT NOT NULL,
    "puzzleId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Score_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Score_userId_puzzleId_key" ON "Score"("userId", "puzzleId");

-- AddForeignKey
ALTER TABLE "Score" ADD CONSTRAINT "Score_puzzleId_fkey" FOREIGN KEY ("puzzleId") REFERENCES "Puzzle"("id") ON DELETE CASCADE ON UPDATE CASCADE;
