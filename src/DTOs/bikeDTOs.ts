import Bike from "../interfaces/bike.interface";

export type BikeDTO = Omit<Bike, "id">;
