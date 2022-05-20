import { PrismaClient, Score } from '@prisma/client';
import { legalWords } from '../utils/legalWords';

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

export async function updateScore(
  id: string,
  payload: { word: string }
): Promise<Score | null> {
  const { word } = payload;

  const existingScore = await prisma.score.findFirst({
    where: { id },
  });

  if (
    existingScore &&
    legalWords.includes(word.toLowerCase()) &&
    !existingScore.words.includes(word)
  ) {
    const newValue = existingScore.points + word.length;
    const newWords = JSON.stringify([...JSON.parse(existingScore.words), word]);

    const updatedScore = await prisma.score.update({
      where: { id },
      data: { points: newValue, words: newWords },
    });

    return updatedScore;
  }

  return existingScore;
}

export async function submitScore(id: string): Promise<Score> {
  const score = await prisma.score.update({
    where: { id },
    data: { complete: true },
  });

  return score;
}
