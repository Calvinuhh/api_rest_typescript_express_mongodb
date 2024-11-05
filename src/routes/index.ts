import { Router } from "express";
import testRouter from "./testRouter";

const router: Router = Router();

router.use(testRouter);

export default router;
