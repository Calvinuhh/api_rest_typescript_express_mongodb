import { Request, Response, Router } from "express";

const testRouter: Router = Router();

testRouter.get("/test", (req: Request, res: Response): void => {
  res.status(200).json("Hello World");
});

export default testRouter;
