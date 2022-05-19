import { Context } from 'koa';
import Router from 'koa-router';

import {
  createScore,
  findScoreByUserAndPuzzle,
} from '../services/scores.service';

const scoreRouter = new Router({ prefix: '/scores' });

scoreRouter.get('/', async (ctx: Context) => {
  const { body } = ctx.request;
  console.log(body);

  const score = await findScoreByUserAndPuzzle(body.userId, body.puzzleId);
  ctx.body = score;
});

scoreRouter.post('/', async (ctx: Context) => {
  const { body } = ctx.request;
  const score = await createScore(body);
  ctx.body = score;
});

export default scoreRouter;
