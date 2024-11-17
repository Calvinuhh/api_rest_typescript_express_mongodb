export default interface Car {
  id: string;
  name: string;
  color: string;
  gas: "gasoline" | "electric";
  year: number;
  price: number;
}
