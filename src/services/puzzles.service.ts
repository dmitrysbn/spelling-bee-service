import { PrismaClient, Puzzle } from '@prisma/client';
import format from 'date-fns/format';

const prisma = new PrismaClient();

export function getCurrentPuzzleId(): string {
  // return format(new Date(), 'dd-MM-yyyy');
  return '0c84d2f3-5d71-4b77-be8a-54c932610d48';
}

export async function createPuzzle(payload: Puzzle) {
  const game = await prisma.puzzle.create({
    data: payload,
  });
  return game;
}
