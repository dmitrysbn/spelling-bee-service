import { Prisma } from '@prisma/client';
import { Context } from 'koa';

export async function error(ctx: Context, next: any) {
  try {
    await next();
  } catch (err) {
    if (err instanceof Prisma.PrismaClientKnownRequestError) {
      if (err.code === 'P2002') {
        ctx.throw(500, 'Duplicate entry!');
      }
    }
  }
}
