"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const error_handler_1 = __importDefault(require("./middleware/error-handler"));
const me_route_1 = __importDefault(require("./api/me-route"));
const env_config_1 = require("./config/env-config");
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
// /me endpoint
app.use(me_route_1.default);
// error handler
app.use(error_handler_1.default);
app.listen(env_config_1.PORT, () => {
    console.log(`Server is running on port ${env_config_1.PORT}`);
});
