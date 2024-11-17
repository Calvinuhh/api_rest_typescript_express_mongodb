import Car from "../interfaces/Car.interface";
import { carDTO, carSinglePropDTO } from "../DTOs/carsDTO";
import ItemModel from "../models/Item";

export const createCarService = async (item: carDTO): Promise<Car> => {
  const newItem = await ItemModel.create(item);

  return newItem;
};

export const getCarsService = async (): Promise<Car[]> => {
  const items = await ItemModel.find();

  if (items.length === 0) {
    throw Error("No Cars Found");
  } else return items;
};

export const getCarService = async (id: string): Promise<Car | null> => {
  const item = await ItemModel.findOne({ _id: id });

  if (!item) {
    throw Error("Car Not Found");
  } else return item;
};

export const updateCarService = async (
  id: string,
  data: carDTO
): Promise<Car | null> => {
  const updateCar = await ItemModel.findOneAndUpdate({ _id: id }, data, {
    new: true,
  });

  if (!updateCar) {
    throw Error("Car Not Found");
  } else return updateCar;
};

export const updateSingleCarService = async (
  id: string,
  data: carSinglePropDTO
): Promise<carSinglePropDTO> => {
  const updateProp = await ItemModel.findOneAndUpdate({ _id: id }, data, {
    new: true,
  });

  if (!updateProp) {
    throw Error("Car Not Found");
  } else return updateProp;
};

export const deleteCarService = async (id: string): Promise<Car> => {
  const deletedCar = await ItemModel.findOneAndDelete({ _id: id });

  if (!deletedCar) {
    throw Error("Car Not Found");
  } else return deletedCar;
};
