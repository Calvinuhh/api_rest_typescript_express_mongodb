import { CarDTO } from "../DTOs/carDTOs";
import { Gas, Doors, State, Transmission } from "../interfaces/types";

const actualYear = new Date().getFullYear();

export const validateEmptyParams = (params: CarDTO): void => {
  for (const value in params) {
    if (!params[value as keyof CarDTO]) throw Error(`Missing field ${value}`);
  }
};

export const validateGasParams = (param: Gas): void => {
  if (param !== "electric" && param !== "gasoline")
    throw Error("Gas must be 'gasoline' or 'electric'");
};

export const validateTransmissionParams = (param: Transmission): void => {
  if (param !== "automatic" && param !== "manual") {
    throw Error("Transmission must be 'automatic' or 'manual'");
  }
};

export const validateStateParams = (param: State): void => {
  if (param !== "new" && param !== "used") {
    throw Error("State must be 'new' or 'used'");
  }
};

export const validateDoorsParams = (param: Doors): void => {
  if (Number(param) !== 2 && Number(param) !== 4) {
    throw Error("Doors must be 2 or 4");
  }
};

export const validatePatchParams = (
  params: string,
  data: string | number
): void => {
  if (params === "gas" && data !== "electric" && data !== "gasoline") {
    throw Error("Gas must be 'electric' or 'gasoline'");
  } else if (
    params === "transmission" &&
    data !== "automatic" &&
    data !== "manual"
  ) {
    throw Error("Transmission must be 'manual' or 'automatic'");
  } else if (params === "state" && data !== "new" && data !== "used") {
    throw Error("State must be 'new' or 'used'");
  } else if (params === "doors" && Number(data) !== 2 && Number(data) !== 4) {
    throw Error("Doors must be '2' or '4'");
  } else if (
    params === "convertible" &&
    Boolean(data) !== true &&
    Boolean(data) !== false
  ) {
    throw Error("Convertible must be 'true' or 'false'");
  }
};

export const validateLength = (
  param: string,
  number1: number,
  number2: number,
  input: string
): void => {
  if (param.length < number1 || param.length > number2) {
    throw Error(
      `length of input ${input} must be between ${number1} and ${number2}`
    );
  }
};

export const validateStrings = (param: string, input: string): void => {
  const regex = /^[a-zA-Z\s]+$/;

  if (!regex.test(param))
    throw Error(
      `In input ${input} are only allowed letters, no numbers or special characters`
    );
};

export const validateNumbers = (param: number, input: string) => {
  const regex = /^[0-9]+$/;
  if (!regex.test(param.toString()))
    throw Error(
      `In input ${input} are only allowed numbers, no spaces, letters or special characters`
    );
};

export const validateNumbersValues = (
  param: number,
  number1: number,
  number2: number,
  input: string
) => {
  if (param < number1 || param > number2)
    throw Error(`input ${input} must be between ${number1} and ${number2}`);
};

export const validatePatchStringsParams = (param: string, input: string) => {
  const regex = /^[a-zA-Z\s]+$/;

  if (input === "name") {
    if (!regex.test(param))
      throw Error(
        `In input ${input} are only allowed letters, no numbers or special characters`
      );
  }
  if (input === "color") {
    if (!regex.test(param))
      throw Error(
        `In input ${input} are only allowed letters, no numbers or special characters`
      );
  }
};

export const validatePatchNumbersParams = (param: number, input: string) => {
  const regex = /^[0-9]+$/;
  if (input === "year") {
    if (!regex.test(param.toString()))
      throw Error(
        `In input ${input} are only allowed numbers, no spaces, letters or special characters`
      );
  }
  if (input === "price") {
    if (!regex.test(param.toString()))
      throw Error(
        `In input ${input} are only allowed numbers, no spaces, letters or special characters`
      );
  }
};

export const validatePatchLegthParams = (
  param: string,
  input: string,
  number1: number,
  number2: number
) => {
  if ((input === "name" && param.length < 3) || param.length > 20)
    throw Error(
      `Length of input ${input} must be between ${number1} and ${number2}`
    );
  if ((input === "color" && param.length < 3) || param.length > 20)
    throw Error(
      `Length of input ${input} must be between ${number1} and ${number2}`
    );
};

export const validatePatchNumbersValues = (param: number, input: string) => {
  console.log(input);

  if (input === "year" && (param < 1950 || param > actualYear)) {
    throw Error(`input ${input} must be between 1950 and ${actualYear}`);
  } else if (input === "price" && (param < 1 || param > 1136000)) {
    throw Error(`input ${input} must be between 1 and 1136000`);
  }
};
