import { Schema, model } from "mongoose";
import Bike from "../interfaces/Bikes.interface";

const ItemSchema = new Schema<Bike>(
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
      enum: ["new", "used"],
      required: true,
    },
  },
  {
    versionKey: false,
  }
);

const ItemModel = model("bikes", ItemSchema);

export default ItemModel;
