import Koa from 'koa';
import Router from 'koa-router';
import logger from 'koa-logger';
import json from 'koa-json';
import bodyParser from 'koa-bodyparser';

const app = new Koa();
const router = new Router();
const PORT = process.env.PORT || 1337;

interface HelloRequest {
  name: string;
}

router.get('/', async (ctx, next) => {
  ctx.body = { msg: 'Hello Worldz!' };

  await next();
});

router.post('/', async (ctx, next) => {
  const data = <HelloRequest>ctx.request.body;
  ctx.body = { name: data.name };
  await next();
});

// Middlewares
app.use(json());
app.use(logger());
app.use(bodyParser());

// Routes
app.use(router.routes()).use(router.allowedMethods());

app.listen(PORT, () => {
  console.log("Koa started");
});