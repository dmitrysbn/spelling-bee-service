import { Context } from 'koa';
import Router from 'koa-router';

import { getCurrentPuzzleId } from '../services/puzzles.service';

const puzzleRouter = new Router({ prefix: '/puzzles' });

puzzleRouter.get('/current_puzzle', (ctx: Context) => {
  const value: string = getCurrentPuzzleId();
  ctx.body = value;
});

export default puzzleRouter;
