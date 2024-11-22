import { Schema, model } from "mongoose";
import Car from "../interfaces/car.interface";

const CarSchema = new Schema<Car>(
  {
    name: {
      type: String,
      required: true,
      minlength: 3,
      maxlength: 20,
      match: /^[a-zA-Z\s]+$/,
    },
    color: {
      type: String,
      required: true,
      minlength: 3,
      maxlength: 20,
      match: /^[a-zA-Z\s]+$/,
    },
    gas: {
      type: String,
      enum: ["gasoline", "electric"],
      required: true,
    },
    transmission: {
      type: String,
      enum: ["automatic", "manual"],
      required: true,
    },
    year: {
      type: Number,
      required: true,
      min: 1950,
      max: new Date().getFullYear(),
    },
    price: {
      type: Number,
      required: true,
      max: 1136000,
    },
    state: {
      type: String,
      enum: ["used", "new"],
      required: true,
    },
    doors: {
      type: Number,
      enum: [2, 4],
      required: true,
    },
    convertible: {
      type: Boolean,
      required: true,
    },
  },
  {
    versionKey: false,
  }
);

const CarModel = model<Car>("car", CarSchema);

export default CarModel;
