import { Context } from 'koa';
import Router from 'koa-router';

import {
  createScore,
  findScoreByUserAndPuzzle,
  submitScore,
  updateScore,
} from '../services/scores.service';

const scoreRouter = new Router({ prefix: '/scores' });

scoreRouter.get('/', async (ctx: Context) => {
  const { body } = ctx.request;

  const score = await findScoreByUserAndPuzzle(body.userId, body.puzzleId);
  ctx.body = score;
});

scoreRouter.post('/', async (ctx: Context) => {
  const { body } = ctx.request;

  const score = await createScore(body);
  ctx.body = score;
});

scoreRouter.post('/:id/submit', async (ctx: Context) => {
  const { id } = ctx.params;

  const score = await submitScore(id);
  ctx.body = score;
});

scoreRouter.patch('/:id', async (ctx: Context) => {
  const { id } = ctx.params;
  const { body } = ctx.request;

  const updatedScore = await updateScore(id, body);
  ctx.body = updatedScore;
});

export default scoreRouter;
