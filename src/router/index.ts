import { Router } from "express";
import carsRouter from "./routes/cars.routes";
import bikesRouter from "./routes/bikes.routes";

const router: Router = Router();

router.use("/cars", carsRouter);
router.use("/bikes", bikesRouter);

export default router;
