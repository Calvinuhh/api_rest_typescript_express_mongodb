import BikeModel from "../models/Bikes";
import Bike from "../interfaces/bike.interface";
import { BikeDTO } from "../DTOs/bikeDTOs";

export const createBikeService = async (item: BikeDTO): Promise<Bike> => {
  const newItem = await BikeModel.create(item);

  return newItem;
};

export const getBikesService = async (): Promise<Bike[]> => {
  const items = await BikeModel.find();

  if (items.length === 0) {
    throw Error("No Bikes Found");
  } else return items;
};

export const getBikeService = async (id: string): Promise<Bike | null> => {
  const bike = await BikeModel.findOne({ _id: id });

  if (!bike) {
    throw Error("Bike Not Found");
  } else return bike;
};

export const updateBikeService = async (
  id: string,
  data: BikeDTO
): Promise<Bike | null> => {
  const updateBike = await BikeModel.findOneAndUpdate({ _id: id }, data, {
    new: true,
  });

  if (!updateBike) {
    throw Error("Bike Not Found");
  } else return updateBike;
};

export const updatePropBikeService = async (
  id: string,
  data: Partial<BikeDTO>
): Promise<BikeDTO> => {
  const updateProp = await BikeModel.findOneAndUpdate({ _id: id }, data, {
    new: true,
  });

  if (!updateProp) {
    throw Error("Bike Not Found");
  } else return updateProp;
};

export const deleteBikeService = async (id: string): Promise<Bike> => {
  const deleteBike = await BikeModel.findOneAndDelete({ _id: id });

  if (!deleteBike) {
    throw Error("Bike Not Found");
  } else return deleteBike;
};
