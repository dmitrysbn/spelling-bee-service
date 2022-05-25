import { PrismaClient, Puzzle } from '@prisma/client';
import format from 'date-fns/format';

const prisma = new PrismaClient();

export async function getCurrentPuzzle(): Promise<Partial<Puzzle>> {
  const today = format(new Date(), 'dd-MM-yyyy');
  const puzzle: Puzzle = await prisma.puzzle.findFirst({
    where: { date: today },
  });

  return {
    id: puzzle.id,
    letters: puzzle.letters,
    mainLetter: puzzle.mainLetter,
  };
}

export async function createPuzzle(payload: Puzzle) {
  console.log('payload:', payload);

  const game = await prisma.puzzle.create({
    data: payload,
  });

  return game;
}
