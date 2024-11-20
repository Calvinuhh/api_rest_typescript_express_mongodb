import Auth from "../interfaces/auth.interface";
import User from "../interfaces/user.interface";
import UserModel from "../models/Users";
import { hash, compare } from "bcrypt";

export const registerNewUser = async (data: User): Promise<User> => {
  const user = await UserModel.findOne({ email: data.email });
  if (user) throw Error(`Email already exists`);

  const passwordHashed = await hash(data.password, 10);

  const registerNewUser = await UserModel.create({
    email: data.email,
    password: passwordHashed,
    name: data.name,
  });

  return registerNewUser;
};

export const loginUser = async (data: Auth): Promise<Auth> => {
  const user = await UserModel.findOne({
    email: data.email,
  });

  if (!user) throw Error(`User not Found`);

  const passwordHash = user.password;
  const isCorrect = await compare(data.password, passwordHash);

  if (!isCorrect) throw Error("Incorrect password");

  return user;
};
