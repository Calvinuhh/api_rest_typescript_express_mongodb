import { Router } from "express";

import {
  createItem,
  getItems,
  getItem,
  updateItem,
  deleteItem,
} from "../../controllers/blog";

const blogsRouter: Router = Router();

blogsRouter.post("/", createItem);
blogsRouter.get("/", getItems);
blogsRouter.get("/:id", getItem);
blogsRouter.put("/:id", updateItem);
blogsRouter.delete("/:id", deleteItem);

export default blogsRouter;
