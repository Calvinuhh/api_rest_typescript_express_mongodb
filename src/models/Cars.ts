import { Schema, model } from "mongoose";
import Car from "../interfaces/Car.interface";

const ItemSchema = new Schema<Car>(
  {
    name: {
      type: String,
      required: true,
    },
    color: {
      type: String,
      required: true,
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
    },
    price: {
      type: Number,
      required: true,
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

const CarModel = model("cars", ItemSchema);

export default CarModel;
