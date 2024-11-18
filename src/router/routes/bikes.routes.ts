import { Router } from "express";

import {
  createItem,
  getItems,
  getItem,
  updateItem,
  deleteItem,
  updateBikeProp,
} from "../../controllers/bikesControllers";

const bikesRouter: Router = Router();

bikesRouter.post("/", createItem);
bikesRouter.get("/", getItems);
bikesRouter.get("/:id", getItem);
bikesRouter.put("/:id", updateItem);
bikesRouter.patch("/:id/:prop", updateBikeProp);
bikesRouter.delete("/:id", deleteItem);

export default bikesRouter;
