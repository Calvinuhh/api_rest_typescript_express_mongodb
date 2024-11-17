import { Router } from "express";
import carsRouter from "./routes/items.routes";
import blogsRouter from "./routes/blog.routes";

const router: Router = Router();

router.use("/cars", carsRouter);
router.use("/blogs", blogsRouter);

export default router;
