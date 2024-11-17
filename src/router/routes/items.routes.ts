import { Router } from "express";

import {
  createItem,
  getItems,
  getItem,
  updateItem,
  deleteItem,
} from "../../controllers/carsController";

const carsRouter: Router = Router();

carsRouter.post("/", createItem);
carsRouter.get("/", getItems);
carsRouter.get("/:id", getItem);
carsRouter.put("/:id", updateItem);
carsRouter.delete("/:id", deleteItem);

export default carsRouter;
