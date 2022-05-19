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
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteScore = exports.findScoresByUser = exports.findManyScores = exports.findScoresByGame = exports.createScore = void 0;
const client_1 = require("../generated/client");
const score_1 = require("../utils/score");
const points_service_1 = require("./points.service");
const prisma = new client_1.PrismaClient();
function createScore(payload) {
    return __awaiter(this, void 0, void 0, function* () {
        const { score: calculatedScore, puzzle: puzzleId } = (0, score_1.makeQuintessentialScore)(payload.score);
        try {
            const score = yield prisma.score.create({
                data: Object.assign(Object.assign({}, payload), { score: calculatedScore, puzzleId }),
            });
            yield (0, points_service_1.updateUserPointsTotal)(payload.userId, calculatedScore);
            return score;
        }
        catch (err) {
            console.log(err);
        }
    });
}
exports.createScore = createScore;
function findScoresByGame(gameId) {
    return __awaiter(this, void 0, void 0, function* () {
        const scores = prisma.score.findMany({
            where: { gameId },
            include: { user: true },
        });
        return scores;
    });
}
exports.findScoresByGame = findScoresByGame;
function findManyScores() {
    return __awaiter(this, void 0, void 0, function* () {
        const scores = prisma.score.findMany();
        return scores;
    });
}
exports.findManyScores = findManyScores;
function findScoresByUser(userId) {
    return __awaiter(this, void 0, void 0, function* () {
        const scores = prisma.score.findMany({
            where: { userId },
            include: { user: true },
        });
        return scores;
    });
}
exports.findScoresByUser = findScoresByUser;
function deleteScore(id) {
    return __awaiter(this, void 0, void 0, function* () {
        yield prisma.score.delete({ where: { id } });
    });
}
exports.deleteScore = deleteScore;
