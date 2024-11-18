import { carDTO, carSinglePropDTO } from "../DTOs/carsDTO";

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
  data: string | number | boolean
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

export const validateStrings = (): void => {};
