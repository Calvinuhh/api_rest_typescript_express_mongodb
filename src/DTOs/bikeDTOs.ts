import Bike from "../interfaces/bikes.interface";

export type BikeDTO = Omit<Bike, "id">;
