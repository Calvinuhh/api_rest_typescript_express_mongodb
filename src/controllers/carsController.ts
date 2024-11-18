import { Request, Response } from "express";
import {
  createCarService,
  getCarsService,
  getCarService,
  updateCarService,
  deleteCarService,
  updatePropCarService,
} from "../services/carsServices";
import { carDTO } from "../DTOs/carsDTO";

export const createItem = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const {
      name,
      color,
      gas,
      transmission,
      year,
      price,
      state,
      doors,
      convertible,
    }: carDTO = req.body;

    const newCar = await createCarService({
      name: name.trim(),
      color: color.trim(),
      gas,
      transmission,
      year,
      price,
      state,
      doors,
      convertible,
    });

    res.status(201).json(newCar);
  } catch (error) {
    const err = error as Error;
    res.status(400).json(err.message);
  }
};

export const getItems = async (req: Request, res: Response): Promise<void> => {
  try {
    const cars = await getCarsService();

    res.status(200).json(cars);
  } catch (error) {
    const err = error as Error;
    res.status(404).json(err.message);
  }
};

export const getItem = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;

    const car = await getCarService(id);

    res.status(200).json(car);
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
    const {
      name,
      color,
      gas,
      transmission,
      year,
      price,
      state,
      doors,
      convertible,
    }: carDTO = req.body;

    for (const value in req.body) {
      if (!req.body[value]) {
        throw Error(`Missing field: ${value}`);
      }
    }

    const updateCar = await updateCarService(id, {
      name: name.trim(),
      color: color.trim(),
      gas,
      transmission,
      year,
      price,
      state,
      doors,
      convertible,
    });

    res.status(201).json(updateCar);
  } catch (error) {
    const err = error as Error;
    res.status(404).json(err.message);
  }
};

export const updateCarProp = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { id, prop } = req.params;
    let { newData } = req.body;

    newData = newData.toString().trim();

    if (prop === "gas" && newData !== "electric" && newData !== "gasoline") {
      throw Error("Gas must be electric or gasoline");
    }
    const newProp = await updatePropCarService(id, { [prop]: newData });
    res.status(200).json(newProp);
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
