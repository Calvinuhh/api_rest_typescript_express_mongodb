import Car from "../interfaces/Car.interface";
import CarModel from "../models/Cars";
import { carDTO, carSinglePropDTO } from "../DTOs/carsDTO";

export const createCarService = async (item: carDTO): Promise<Car> => {
  const newItem = await CarModel.create(item);

  return newItem;
};

export const getCarsService = async (): Promise<Car[]> => {
  const items = await CarModel.find();

  if (items.length === 0) {
    throw Error("No Cars Found");
  } else return items;
};

export const getCarService = async (id: string): Promise<Car | null> => {
  const item = await CarModel.findOne({ _id: id });

  if (!item) {
    throw Error("Car Not Found");
  } else return item;
};

export const updateCarService = async (
  id: string,
  data: carDTO
): Promise<Car | null> => {
  const updateCar = await CarModel.findOneAndUpdate({ _id: id }, data, {
    new: true,
  });

  if (!updateCar) {
    throw Error("Car Not Found");
  } else return updateCar;
};

export const updatePropCarService = async (
  id: string,
  data: carSinglePropDTO
): Promise<carSinglePropDTO> => {
  const updateProp = await CarModel.findOneAndUpdate({ _id: id }, data, {
    new: true,
  });

  if (!updateProp) {
    throw Error("Car Not Found");
  } else return updateProp;
};

export const deleteCarService = async (id: string): Promise<Car> => {
  const deletedCar = await CarModel.findOneAndDelete({ _id: id });

  if (!deletedCar) {
    throw Error("Car Not Found");
  } else return deletedCar;
};
