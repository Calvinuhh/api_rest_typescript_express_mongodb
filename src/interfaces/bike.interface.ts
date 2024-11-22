import { Gas, State, Transmission } from "./types";

export default interface Bike {
  id: string;
  name: string;
  color: string;
  gas: Gas;
  transmission: Transmission;
  year: number;
  price: number;
  state: State;
}
