export type BikeDTO = {
  name: string;
  color: string;
  gas: "gasoline" | "electric";
  transmission: "automatic" | "manual";
  year: number;
  price: number;
  state: "new" | "used";
};

export type bikeSinglePropDTO = {
  gas?: "gasoline" | "electric";
  transmission?: "automatic" | "manual";
  state?: "new" | "used";
  prop?: string | number;
};
