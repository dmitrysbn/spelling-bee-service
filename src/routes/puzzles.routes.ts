import { Context } from 'koa';
import Router from 'koa-router';

import { getCurrentPuzzleId, createPuzzle } from '../services/puzzles.service';

const puzzleRouter = new Router({ prefix: '/puzzles' });

puzzleRouter.get('/current_puzzle', (ctx: Context) => {
  const puzzleId: string = getCurrentPuzzleId();
  ctx.body = { puzzleId };
});

puzzleRouter.post('/', async (ctx: Context) => {
  const { body } = ctx.request;
  const puzzle = await createPuzzle(body);
  ctx.body = puzzle;
});

export default puzzleRouter;
