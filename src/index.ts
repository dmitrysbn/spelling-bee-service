import Koa from 'koa';
import router from './routes';
import logger from 'koa-logger';
import json from 'koa-json';
import cors from '@koa/cors';
import bodyParser from 'koa-bodyparser';
import { error } from './middleware/error.middleware';

const app = new Koa();
const PORT = process.env.PORT || 1337;

// Middlewares
app.use(json());
app.use(
  logger((str, args) => {
    console.log(str, args);
  })
);
app.use(bodyParser());

// Routes
app.use(async (ctx, next) => await error(ctx, next));
app.use(cors());
app.use(router());

app.listen(PORT, () => {
  console.log('Koa started');
});
