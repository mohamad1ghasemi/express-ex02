import express, { NextFunction, Request, Response } from "express";

const AuthMiddleware = (req: Request, res: Response, next: NextFunction) => {
    if (req.body.role && req.body.role === 'admin') {
        next();
    }
    else {
        res.status(401).send('Unauthhorized');
    }
}

export default AuthMiddleware;