import Bike from "./bike.interface";

import { Doors } from "./types";

export default interface Car extends Bike {
  doors: Doors;
  convertible: boolean;
}
