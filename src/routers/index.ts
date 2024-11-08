import { Router } from "express";
import itemsRouter from "./routes/items.routes";
import blogsRouter from "./routes/blog.routes";

const router: Router = Router();

router.use("/items", itemsRouter);
router.use("/blogs", blogsRouter);

export default router;
