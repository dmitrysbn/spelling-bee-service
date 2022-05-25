import { PrismaClient, Puzzle } from '@prisma/client';
import format from 'date-fns/format';

const prisma = new PrismaClient();

export async function getCurrentPuzzle(): Promise<Partial<Puzzle>> {
  const today = format(new Date(), 'dd-MM-yyyy');
  console.log('today:', today);

  const puzzle = await prisma.puzzle.findFirst({ where: { date: today } });

  console.log(puzzle);

  return {
    id: (puzzle as Puzzle).id,
    letters: (puzzle as Puzzle).letters,
    mainLetter: (puzzle as Puzzle).mainLetter,
  };
}

export async function createPuzzle(payload: Puzzle) {
  console.log('payload:', payload);

  const game = await prisma.puzzle.create({
    data: payload,
  });

  return game;
}
