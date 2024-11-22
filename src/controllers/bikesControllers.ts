import { Request, Response } from "express";
import {
  getBikesService,
  createBikeService,
  deleteBikeService,
  getBikeService,
  updateBikeService,
  updatePropBikeService,
} from "../services/bikesServices";
import { BikeDTO } from "../DTOs/bikeDTOs";
import {
  validateEmptyParams,
  validateGasParams,
  validateTransmissionParams,
  validateStateParams,
  validatePatchParams,
  validateLength,
  validateStrings,
  validateNumbers,
  validateNumbersValues,
  validatePatchStringsParams,
  validatePatchNumbersParams,
  validatePatchLegthParams,
  validatePatchNumbersValues,
} from "../utils/bikeValidations";

const actualYear = new Date().getFullYear();

export const createItem = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { gas, transmission, year, price, state }: BikeDTO = req.body;
    let { name, color }: BikeDTO = req.body;

    name = name.trim();
    color = color.trim();

    validateEmptyParams({ name, color, gas, transmission, year, price, state });
    validateStrings(name, "name");
    validateStrings(color, "color");
    validateNumbers(year, "year");
    validateNumbers(price, "price");
    validateLength(name, 3, 20, "name");
    validateLength(color, 3, 20, "color");
    validateNumbersValues(year, 1950, actualYear, "year");
    validateNumbersValues(price, 1, 1136000, "price");
    validateGasParams(gas);
    validateTransmissionParams(transmission);
    validateStateParams(state);

    const newBike = await createBikeService({
      name,
      color,
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
    const { gas, transmission, year, price, state }: BikeDTO = req.body;
    let { name, color }: BikeDTO = req.body;

    validateEmptyParams({ name, color, gas, transmission, year, price, state });
    validateStrings(name, "name");
    validateStrings(color, "color");
    validateNumbers(year, "year");
    validateNumbers(price, "price");
    validateLength(name, 3, 20, "name");
    validateLength(color, 3, 20, "color");
    validateNumbersValues(year, 1950, actualYear, "year");
    validateNumbersValues(price, 1, 1136000, "price");
    validateGasParams(gas);
    validateTransmissionParams(transmission);
    validateStateParams(state);

    const updateBike = await updateBikeService(id, {
      name,
      color,
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

    if (!newData) throw Error(`missing field ${prop}`);

    validatePatchStringsParams(newData, prop);
    validatePatchNumbersParams(newData, prop);
    validatePatchLegthParams(newData, prop, 3, 20);
    validatePatchNumbersValues(newData, prop);
    validatePatchParams(prop, newData);

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
