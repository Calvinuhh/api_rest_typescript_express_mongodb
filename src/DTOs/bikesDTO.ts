export type BikeDTO = {
  name: string;
  color: string;
  gas: "gasoline" | "electric";
  year: number;
  price: number;
  state: "new" | "used";
};

export type bikeSinglePropDTO = {
  gas?: "gasoline" | "electric";
  state?: "new" | "used";
  prop?: string | number;
};
