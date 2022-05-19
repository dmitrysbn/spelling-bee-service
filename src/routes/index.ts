import combineRouters from 'koa-combine-routers';
import puzzleRouter from './puzzles.routes';

export default combineRouters(puzzleRouter);
