import express, { NextFunction, Request, Response } from "express";
import dotenv from "dotenv";
import cors from 'cors';

dotenv.config();
const app = express();
const port = process.env.PORT ? parseInt(process.env.PORT) : 3000;

app.use(cors());
app.use(express.json());

const authMiddleware = ((req: Request, res: Response, next: NextFunction) => {
    if (req.body.role && req.body.role === 'admin') {
        next();
    }
    else {
        res.status(401).send('Unauthhorized');
    }
});

const myMiddleware = ((req: Request, res: Response, next: NextFunction) => {
    console.log("time: ", Date.now());
    next();
});

app.get("/",myMiddleware, (req: Request, res: Response) => {
    res.send("Hello, World! 🚀");
});

app.get("/apis/posts",myMiddleware,authMiddleware , (req: Request, res: Response) => {
    console.log(req.body);
    res.send("Hello, World! 🚀");
});

app.listen(port, () => {
    console.log(`🚀 Server is running at http://localhost:${port}`);
});
