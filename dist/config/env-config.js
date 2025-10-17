"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MAX_LENGTH = exports.BASE_URL = exports.PORT = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
const path_1 = __importDefault(require("path"));
dotenv_1.default.config({ path: path_1.default.resolve(__dirname, '../../.env') });
exports.PORT = Number(process.env.PORT) || 3000;
exports.BASE_URL = process.env.BASE_CAT_FACT_API_URL;
exports.MAX_LENGTH = process.env.MAX_LENGTH || 1000;
