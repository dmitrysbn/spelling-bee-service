"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCurrentPuzzleId = void 0;
const format_1 = __importDefault(require("date-fns/format"));
function getCurrentPuzzleId() {
    return (0, format_1.default)(new Date(), 'dd-MM-yyyy');
}
exports.getCurrentPuzzleId = getCurrentPuzzleId;
