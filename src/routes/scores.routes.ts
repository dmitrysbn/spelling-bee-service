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
  const { query } = ctx.request;
  const { userId, puzzleId } = query;

  const score = await findScoreByUserAndPuzzle(
    userId as string,
    puzzleId as string
  );
  ctx.body = score;
});

scoreRouter.post('/', async (ctx: Context) => {
  const { body } = ctx.request;

  const score = await createScore(body);
  ctx.body = score;
});

scoreRouter.patch('/:id', async (ctx: Context) => {
  const { id } = ctx.params;
  const { body } = ctx.request;

  const updatedScore = await updateScore(id, body);
  ctx.body = updatedScore;
});

scoreRouter.post('/:id/submit', async (ctx: Context) => {
  const { id } = ctx.params;

  const score = await submitScore(id);
  ctx.body = score;
});

export default scoreRouter;
