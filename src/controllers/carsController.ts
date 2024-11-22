import { Request, Response } from "express";
import {
  createCarService,
  getCarsService,
  getCarService,
  updateCarService,
  deleteCarService,
  updatePropCarService,
} from "../services/carsServices";
import { CarDTO } from "../DTOs/carDTOs";
import {
  validateDoorsParams,
  validateEmptyParams,
  validateGasParams,
  validateStateParams,
  validateTransmissionParams,
  validatePatchParams,
  validateLength,
  validateStrings,
  validateNumbers,
  validateNumbersValues,
  validatePatchStringsParams,
  validatePatchLegthParams,
  validatePatchNumbersParams,
  validatePatchNumbersValues,
} from "../utils/carValidations";

const actualYear = new Date().getFullYear();

export const createItem = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const {
      gas,
      transmission,
      year,
      price,
      state,
      doors,
      convertible,
    }: CarDTO = req.body;

    let { name, color }: CarDTO = req.body;

    name = name.trim();
    color = color.trim();

    validateEmptyParams({
      name,
      color,
      gas,
      transmission,
      year,
      price,
      state,
      doors,
      convertible,
    });
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
    validateDoorsParams(doors);

    const newCar = await createCarService({
      name,
      color,
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
      gas,
      transmission,
      year,
      price,
      state,
      doors,
      convertible,
    }: CarDTO = req.body;

    let { name, color }: CarDTO = req.body;

    name = name.trim();
    color = color.trim();

    validateEmptyParams({
      name,
      color,
      gas,
      transmission,
      year,
      price,
      state,
      doors,
      convertible,
    });
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
    validateDoorsParams(doors);

    const updateCar = await updateCarService(id, {
      name,
      color,
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

    if (!newData) throw Error(`missing field ${prop}`);

    validatePatchStringsParams(newData, prop);
    validatePatchNumbersParams(newData, prop);
    validatePatchLegthParams(newData, prop, 3, 20);
    validatePatchNumbersValues(newData, prop);
    validatePatchParams(prop, newData);

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
