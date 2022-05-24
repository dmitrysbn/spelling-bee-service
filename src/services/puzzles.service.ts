import { PrismaClient, Puzzle } from '@prisma/client';
import format from 'date-fns/format';

const prisma = new PrismaClient();

export async function getCurrentPuzzleId(): Promise<string> {
  const today = format(new Date(), 'dd-MM-yyyy');
  const puzzle = await prisma.puzzle.findFirst({ where: { date: today } });

  if (!puzzle) {
    return '';
  }

  return puzzle.id;
}

export async function createPuzzle(payload: Puzzle) {
  console.log(payload);

  const game = await prisma.puzzle.create({
    data: payload,
  });

  return game;
}
