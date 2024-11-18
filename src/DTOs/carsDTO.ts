export type carDTO = {
  name: string;
  color: string;
  gas: "gasoline" | "electric";
  transmission: "automatic" | "manual";
  year: number;
  price: number;
  state: "new" | "used";
  doors: 2 | 4;
  convertible: true | false;
};

export type carSinglePropDTO = {
  gas?: "gasoline" | "electric";
  state?: "new" | "used";
  transmission?: "automatic" | "manual";
  convertible?: true | false;

  doors?: 2 | 4;
  prop?: string | number;
};
