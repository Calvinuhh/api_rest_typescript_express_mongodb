import { carDTO, carSinglePropDTO } from "../DTOs/carsDTO";

const actualYear = new Date().getFullYear();

export const validateEmptyParams = (params: carDTO): void => {
  for (const value in params) {
    if (!params[value as keyof carDTO]) throw Error(`Missing field ${value}`);
  }
};

export const validateGasParams = (param: carSinglePropDTO): void => {
  const { gas } = param;
  if (gas !== "electric" && gas !== "gasoline")
    throw Error("Gas must be 'gasoline' or 'electric'");
};

export const validateTransmissionParams = (param: carSinglePropDTO): void => {
  const { transmission } = param;
  if (transmission !== "automatic" && transmission !== "manual") {
    throw Error("Transmission must be 'automatic' or 'manual'");
  }
};

export const validateStateParams = (param: carSinglePropDTO): void => {
  const { state } = param;
  if (state !== "new" && state !== "used") {
    throw Error("State must be 'new' or 'used'");
  }
};

export const validateDoorsParams = (param: carSinglePropDTO): void => {
  const { doors } = param;
  if (Number(doors) !== 2 && Number(doors) !== 4) {
    throw Error("Doors must be 2 or 4");
  }
};

export const validatePatchParams = (
  params: carSinglePropDTO,
  data: string | number
): void => {
  const { prop } = params;

  if (prop === "gas" && data !== "electric" && data !== "gasoline") {
    throw Error("Gas must be 'electric' or 'gasoline'");
  } else if (
    prop === "transmission" &&
    data !== "automatic" &&
    data !== "manual"
  ) {
    throw Error("Transmission must be 'manual' or 'automatic'");
  } else if (prop === "state" && data !== "new" && data !== "used") {
    throw Error("State must be 'new' or 'used'");
  } else if (prop === "doors" && Number(data) !== 2 && Number(data) !== 4) {
    throw Error("Doors must be '2' or '4'");
  } else if (
    prop === "convertible" &&
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
