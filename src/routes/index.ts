import combineRouters from 'koa-combine-routers';
import puzzleRouter from './puzzles.routes';
import scoreRouter from './scores.routes';

export default combineRouters(puzzleRouter, scoreRouter);
