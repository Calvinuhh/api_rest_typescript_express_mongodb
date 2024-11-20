import { Request, Response } from "express";
import { registerNewUser, loginUser } from "../services/authService";
import User from "../interfaces/user.interface";
import Auth from "../interfaces/auth.interface";

export const registerController = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { email, password, name }: User = req.body;
    const newUser = await registerNewUser({ email, password, name });

    res.status(201).json(newUser);
  } catch (error) {
    const err = error as Error;
    res.status(400).json(err.message);
  }
};

export const loginController = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { email, password }: Auth = req.body;

    const login = await loginUser({ email, password });

    res.status(200).json(login);
  } catch (error) {
    const err = error as Error;
    res.status(400).json(err.message);
  }
};
