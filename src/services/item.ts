import { DeleteResult } from "mongoose";
import Car from "../interfaces/car.interface";
import ItemModel from "../models/item";

export const createCarService = async (item: Car): Promise<Car> => {
  const newItem = await ItemModel.create(item);

  return newItem;
};

export const getCarsService = async (): Promise<Car[]> => {
  const items = await ItemModel.find();

  return items;
};

export const getCarService = async (id: string): Promise<Car | null> => {
  const item = await ItemModel.findOne({ _id: id });

  return item;
};

export const updateCarService = async (
  id: string,
  data: Car
): Promise<Car | null> => {
  const updateCar = await ItemModel.findOneAndUpdate({ _id: id }, data, {
    new: true,
  });

  return updateCar;
};

export const deleteCarService = async (id: string): Promise<DeleteResult> => {
  const deletedCar = ItemModel.deleteOne({ _id: id });

  return deletedCar;
};
