import { PrismaClient, Puzzle } from '@prisma/client';
import format from 'date-fns/format';

const prisma = new PrismaClient();

export function getCurrentPuzzleId(): string {
  return format(new Date(), 'dd-MM-yyyy');
}

export async function createPuzzle(payload: Puzzle) {
  const game = await prisma.puzzle.create({
    data: payload,
  });
  return game;
}
