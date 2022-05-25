import { Puzzle } from '@prisma/client';
import { Context } from 'koa';
import Router from 'koa-router';

import { getCurrentPuzzle, createPuzzle } from '../services/puzzles.service';

const puzzleRouter = new Router({ prefix: '/puzzles' });

puzzleRouter.get('/current_puzzle', async (ctx: Context) => {
  const puzzle: Partial<Puzzle> = await getCurrentPuzzle();

  ctx.body = puzzle;
});

puzzleRouter.post('/', async (ctx: Context) => {
  const { body } = ctx.request;
  const puzzle = await createPuzzle(body);

  ctx.body = puzzle;
});

export default puzzleRouter;
