import { Request, Response } from "express";
import {
  createCarService,
  getCarsService,
  getCarService,
  updateCarService,
  deleteCarService,
} from "../services/item";

export const createItem = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { name, color, gas, year, description, price } = req.body;

    const responseItem = await createCarService({
      name: name.trim(),
      color: color.trim(),
      gas: gas.trim(),
      year,
      description: description.trim(),
      price,
    });

    res.status(201).json(responseItem);
  } catch (error) {
    const err = error as Error;
    res.status(400).json(err.message);
  }
};

export const getItems = async (req: Request, res: Response): Promise<void> => {
  try {
    const items = await getCarsService();

    res.status(200).json(items);
  } catch (error) {
    const err = error as Error;
    res.status(404).json(err.message);
  }
};

export const getItem = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;

    const item = await getCarService(id);

    res.status(200).json(item);
  } catch (error) {
    const err = error as Error;
    res.status(404).json(err.message);
  }
};

export const updateItem = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { id } = req.params;
    const { name, color, gas, year, description, price } = req.body;

    for (const value in req.body) {
      if (!req.body[value]) {
        throw Error(`Missing field: ${value}`);
      }
    }

    const updateCar = await updateCarService(id, {
      name,
      color,
      gas,
      year,
      description,
      price,
    });

    res.status(201).json(updateCar);
  } catch (error) {
    const err = error as Error;
    res.status(404).json(err.message);
  }
};

export const deleteItem = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { id } = req.params;

    await deleteCarService(id);

    res.status(200).json("Car deleted");
  } catch (error) {
    const err = error as Error;
    res.status(404).json(err.message);
  }
};
