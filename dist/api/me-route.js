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
const express_1 = require("express");
const axios_1 = __importDefault(require("axios"));
const env_config_1 = require("../config/env-config");
const mainRoute = (0, express_1.Router)();
mainRoute.get("/me", (_req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        console.log("/me endpoint it!");
        const response = yield axios_1.default.get(`${env_config_1.BASE_URL}/fact?max_length=${env_config_1.MAX_LENGTH}`, {
            timeout: 10000,
        });
        console.log("Fetched cat fact:");
        return res.status(200).json({
            status: "success",
            user: {
                email: "adekunlemustapha26530@gmail.com",
                name: "Adekunle Mustapha",
                stack: "Node.js/Express",
            },
            timestamp: new Date().toISOString(),
            fact: response.data.fact,
        });
    }
    catch (error) {
        console.log("Error occurred while fetching cat fact:", error);
        return next(error);
    }
}));
exports.default = mainRoute;
