export type carDTO = {
  name: string;
  color: string;
  gas: "gasoline" | "electric";
  year: number;
  price: number;
};

export type carSinglePropDTO = {
  gas?: "gasoline" | "electric";
  prop?: string | number;
};
