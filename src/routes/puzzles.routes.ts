import { Context } from 'koa';
import Router from 'koa-router';

import { getCurrentPuzzleId, createPuzzle } from '../services/puzzles.service';

const puzzleRouter = new Router({ prefix: '/puzzles' });

puzzleRouter.get('/current_puzzle', (ctx: Context) => {
  const value: string = getCurrentPuzzleId();
  ctx.body = value;
});

puzzleRouter.post('/', async (ctx: Context) => {
  const { body } = ctx.request;
  const game = await createPuzzle(body);
  ctx.body = game;
});

export default puzzleRouter;
