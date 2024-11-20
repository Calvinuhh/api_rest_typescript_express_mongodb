import { Schema, model } from "mongoose";
import User from "../interfaces/user.interface";

const UserSchema = new Schema<User>(
  {
    email: {
      type: String,
      required: true,
      minlength: 5,
      maxlength: 40,
      unique: true,
    },
    password: { type: String, required: true },
    name: { type: String, required: true },
  },
  { versionKey: false }
);

const UserModel = model("user", UserSchema);

export default UserModel;
