"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const cors_1 = __importDefault(require("cors"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const port = process.env.PORT ? parseInt(process.env.PORT) : 3000;
const authMiddleware = ((req, res, next) => {
    if (req.body.role && req.body.role === 'admin') {
        next();
    }
    else {
        res.status(401).send('Unauthhorized');
    }
});
app.use((0, cors_1.default)());
app.use(express_1.default.json());
const myMiddleware = ((req, res, next) => {
    console.log("time: ", Date.now());
    next();
});
app.get("/", myMiddleware, authMiddleware, (req, res) => {
    res.send("Hello, World! 🚀");
});
app.get("/apis/posts", myMiddleware, (req, res) => {
    console.log(req.body);
    res.send("Hello, World! 🚀");
});
app.listen(port, () => {
    console.log(`🚀 Server is running at http://localhost:${port}`);
});
