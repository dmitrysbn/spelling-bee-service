"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const koa_router_1 = __importDefault(require("koa-router"));
const puzzles_service_1 = require("../services/puzzles.service");
const puzzleRouter = new koa_router_1.default({ prefix: '/puzzles' });
puzzleRouter.get('/current_puzzle', (ctx) => {
    const value = (0, puzzles_service_1.getCurrentPuzzleId)();
    ctx.body = value;
});
exports.default = puzzleRouter;
