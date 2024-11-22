import Car from "../interfaces/car.interface";

export type CarDTO = Omit<Car, "id">;
