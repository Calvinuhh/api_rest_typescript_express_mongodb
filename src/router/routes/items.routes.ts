import { Router } from "express";

import {
  createItem,
  getItems,
  getItem,
  updateItem,
  deleteItem,
} from "../../controllers/item";

const itemsRouter: Router = Router();

itemsRouter.post("/", createItem);
itemsRouter.get("/", getItems);
itemsRouter.get("/:id", getItem);
itemsRouter.put("/:id", updateItem);
itemsRouter.delete("/:id", deleteItem);

export default itemsRouter;
