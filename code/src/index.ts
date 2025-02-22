import express, { NextFunction, Request, Response } from "express";
import dotenv from "dotenv";
import cors from 'cors';
import useControllers from './users/usersControllers';


dotenv.config();
const app = express();
const port = process.env.PORT ? parseInt(process.env.PORT) : 3000;

app.use(cors());
app.use(express.json());
app.use("/users", useControllers);


const myMiddleware = ((req: Request, res: Response, next: NextFunction) => {
    console.log("time: ", Date.now());
    next();
});

app.listen(port, () => {
    console.log(`🚀 Server is running at http://localhost:${port}`);
});
