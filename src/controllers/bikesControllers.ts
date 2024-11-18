import { Request, Response } from "express";
import {
  getBikesService,
  createBikeService,
  deleteBikeService,
  getBikeService,
  updateBikeService,
  updatePropBikeService,
} from "../services/bikesServices";
import { BikeDTO } from "../DTOs/bikesDTO";

export const createItem = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { name, color, gas, transmission, year, price, state }: BikeDTO =
      req.body;

    const newBike = await createBikeService({
      name: name.trim(),
      color: color.trim(),
      gas,
      transmission,
      year,
      price,
      state,
    });

    res.status(201).json(newBike);
  } catch (error) {
    const err = error as Error;
    res.status(400).json(err.message);
  }
};

export const getItems = async (req: Request, res: Response): Promise<void> => {
  try {
    const bikes = await getBikesService();

    res.status(200).json(bikes);
  } catch (error) {
    const err = error as Error;
    res.status(404).json(err.message);
  }
};

export const getItem = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;

    const bike = await getBikeService(id);

    res.status(200).json(bike);
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
    const { name, color, gas, transmission, year, price, state }: BikeDTO =
      req.body;

    for (const value in req.body) {
      if (!req.body[value]) {
        throw Error(`Missing field: ${value}`);
      }
    }

    const updateBike = await updateBikeService(id, {
      name: name.trim(),
      color: color.trim(),
      gas,
      transmission,
      year,
      price,
      state,
    });

    res.status(201).json(updateBike);
  } catch (error) {
    const err = error as Error;
    res.status(404).json(err.message);
  }
};

export const updateBikeProp = async (
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
    const newProp = await updatePropBikeService(id, { [prop]: newData });
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

    await deleteBikeService(id);

    res.status(200).json("Bike Deleted");
  } catch (error) {
    const err = error as Error;
    res.status(404).json(err.message);
  }
};
