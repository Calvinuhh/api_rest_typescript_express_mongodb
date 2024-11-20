import { Router } from "express";
import carsRouter from "./routes/cars.routes";
import bikesRouter from "./routes/bikes.routes";
import authRouter from "./routes/auth.routes";

const router: Router = Router();

router.use("/cars", carsRouter);
router.use("/bikes", bikesRouter);
router.use("/auth", authRouter);

export default router;
