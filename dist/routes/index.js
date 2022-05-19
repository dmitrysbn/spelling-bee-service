"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const koa_combine_routers_1 = __importDefault(require("koa-combine-routers"));
const puzzles_routes_1 = __importDefault(require("./puzzles.routes"));
exports.default = (0, koa_combine_routers_1.default)(puzzles_routes_1.default);
