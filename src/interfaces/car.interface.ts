import Bike from "./bikes.interface";

import { Doors } from "./types";

export default interface Car extends Bike {
  doors: Doors;
  convertible: boolean;
}
