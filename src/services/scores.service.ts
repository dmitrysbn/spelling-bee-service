import { PrismaClient, Score } from '@prisma/client';

const prisma = new PrismaClient();

export async function createScore(payload: Score): Promise<Score> {
  const score = await prisma.score.create({
    data: payload,
  });
  return score;
}

export async function findScoreByUserAndPuzzle(
  userId: string,
  puzzleId: string
): Promise<Score | null> {
  const score = await prisma.score.findUnique({
    where: { userId_puzzleId: { userId, puzzleId } },
  });
  return score;
}
