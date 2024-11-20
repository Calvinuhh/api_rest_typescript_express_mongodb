export interface carDTO {
  name: string;
  color: string;
  gas: "gasoline" | "electric";
  transmission: "automatic" | "manual";
  year: number;
  price: number;
  state: "new" | "used";
  doors: 2 | 4;
  convertible: true | false;
}

export interface carSinglePropDTO {
  gas?: "gasoline" | "electric";
  transmission?: "automatic" | "manual";
  state?: "new" | "used";
  convertible?: true | false;
  doors?: 2 | 4;
  prop?: string | number;
}
