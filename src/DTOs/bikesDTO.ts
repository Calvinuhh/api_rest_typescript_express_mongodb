export type BikeDTO = {
  name: string;
  color: string;
  gas: "gasoline" | "electric";
  transmission: "automatic" | "electric";
  year: number;
  price: number;
  state: "new" | "used";
};

export type bikeSinglePropDTO = {
  prop?: string | number;
};
