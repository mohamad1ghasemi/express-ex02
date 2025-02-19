import { Router, Request, Response } from "express";
import { AuthMiddleware } from "./middlewares";
import { getAllUsers } from "./userServices";

const router = Router();

router.get("/", async (req: Request, res: Response) => {
    try{
        res.send(getAllUsers(req,res));
    }catch (error: any) {
        res.status(500).send({message: error.message})
    }
});

router.get("/:id", (req: Request, res: Response) => {
    console.log(req.body);
    res.send("Hello, World! 🚀");
});

router.post("/", AuthMiddleware, (req: Request, res: Response) => {
    console.log(req.body);
    res.send("Hello, World! 🚀");
});

router.put("/:id", AuthMiddleware, (req: Request, res: Response) => {
    console.log(req.body);
    res.send("Hello, World! 🚀");
});

router.delete("/:id", AuthMiddleware, (req: Request, res: Response) => {
    console.log(req.body);
    res.send("Hello, World! 🚀");
});

export default router;