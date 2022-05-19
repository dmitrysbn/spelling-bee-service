"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.scoreRouter = void 0;
const koa_router_1 = __importDefault(require("koa-router"));
exports.scoreRouter = new koa_router_1.default({ prefix: '/scores' });
exports.scoreRouter.post('/', (ctx) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = ctx.request;
    const score = yield createScore(body);
    ctx.body = score;
}));
exports.scoreRouter.get('/', (ctx) => __awaiter(void 0, void 0, void 0, function* () {
    const { query } = ctx;
    const { gameId, userId } = query;
    if (userId) {
        const scoresByUser = yield findScoresByUser(userId);
        return (ctx.body = scoresByUser);
    }
    if (gameId) {
        const scoresByGame = yield findScoresByGame(gameId);
        return (ctx.body = scoresByGame);
    }
    const scores = yield findManyScores();
    return (ctx.body = scores);
}));
