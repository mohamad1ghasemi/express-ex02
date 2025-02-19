"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const cors_1 = __importDefault(require("cors"));
const usersControllers_1 = __importDefault(require("./users/usersControllers"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const port = process.env.PORT ? parseInt(process.env.PORT) : 3000;
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use("/users", usersControllers_1.default);
const myMiddleware = ((req, res, next) => {
    console.log("time: ", Date.now());
    next();
});
app.listen(port, () => {
    console.log(`🚀 Server is running at http://localhost:${port}`);
});
