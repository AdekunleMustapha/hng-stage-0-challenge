"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
const errorHandler = (err, _req, res, _next) => {
    var _a, _b;
    if (axios_1.default.isAxiosError(err)) {
        // Handle Axios errors
        if (err.code === 'ECONNABORTED') {
            return res.status(504).json({
                status: "error",
                message: "The request took too long - please try again later.",
            });
        }
        else if (err.code === 'ENOTFOUND' || err.code === 'ECONNREFUSED') {
            return res.status(502).json({
                status: "error",
                message: "Unable to reach the Cat Fact API - please try again later.",
            });
        }
        else if (axios_1.default.isAxiosError(err)) {
            return res.status(((_a = err.response) === null || _a === void 0 ? void 0 : _a.data.code) || 400).json({
                status: "error",
                message: ((_b = err.response) === null || _b === void 0 ? void 0 : _b.data.message) || "An error occurred while fetching data from the Cat Fact API.",
            });
        }
        else {
            return res.status(500).json({
                status: "error",
                message: "An unexpected error occurred while fetching data from the Cat Fact API.",
            });
        }
        // fallback for other error types 
    }
    else {
        return res.status(500).json({
            status: "error",
            message: "An unexpected error occurred while fetching data from the Cat Fact API.",
        });
    }
};
exports.default = errorHandler;
