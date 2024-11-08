import { Request, Response } from "express";

export const getItem = (req: Request, res: Response): void => {
  try {
  } catch (error) {
    const err = error as Error;
    res.status(400).json({ message: err.message });
  }
};

export const getItems = (req: Request, res: Response): void => {
  try {
  } catch (error) {
    const err = error as Error;
    res.status(400).json({ message: err.message });
  }
};

export const updateItem = (req: Request, res: Response): void => {
  try {
  } catch (error) {
    const err = error as Error;
    res.status(400).json({ message: err.message });
  }
};

export const createItem = (req: Request, res: Response): void => {
  try {
  } catch (error) {
    const err = error as Error;
    res.status(400).json({ message: err.message });
  }
};

export const deleteItem = (req: Request, res: Response): void => {
  try {
  } catch (error) {
    const err = error as Error;
    res.status(400).json({ message: err.message });
  }
};
