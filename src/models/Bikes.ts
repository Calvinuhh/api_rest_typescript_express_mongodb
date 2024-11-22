import { Schema, model } from "mongoose";
import Bike from "../interfaces/bike.interface";

const BikeSchema = new Schema<Bike>(
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
      enum: ["new", "used"],
      required: true,
    },
  },
  {
    versionKey: false,
  }
);

const BikeModel = model<Bike>("bike", BikeSchema);

export default BikeModel;
