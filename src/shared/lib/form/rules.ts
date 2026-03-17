import { REQUIRED_FIELD_ERROR } from "../constants/errors";
import {
  isArray,
  isNumber,
  isString,
  isBooleanTrue,
  isArrayOfNumbers,
  isArrayOfStrings,
} from "../helpers/type-guards";

export const checkValidationRule = (value: unknown, rule?: string) => {
  if (!rule) return true;

  if (typeof value !== "string") return false;

  if (new RegExp(rule.replaceAll("/", "")).test(value)) return true;

  return false;
};

export const BASE_FORM_RULES = {
  isArray: {
    name: "isArray",
    validator: (value: string[]) => ({
      isValid: isArray(value),
      errorText: "Value should be an array",
    }),
  },
  isEmptyOrArrayOfStrings: {
    name: "isArrayOfStrings",
    validator: (value: string[]) => ({
      isValid: !value?.length || isArrayOfStrings(value),
      errorText: "Value should be an array of strings",
    }),
  },
  isEmptyOrArrayOfNumbers: {
    name: "isArrayOfNumbers",
    validator: (value: number[]) => ({
      isValid: !value?.length || isArrayOfNumbers(value),
      errorText: "Value should be an array of numbers",
    }),
  },
  required: {
    name: "required",
    validator: (value: unknown) => ({
      isValid: isBooleanTrue(value),
      errorText: REQUIRED_FIELD_ERROR,
    }),
  },
  isNumber: {
    name: "isNumber",
    validator: (value: unknown) => ({
      isValid: isNumber(value),
      errorText: "Value should be a number",
    }),
  },
  notMoreThan: (max: number) => ({
    name: "notMoreThan",
    validator: (value: number) => ({
      isValid: value <= max,
      errorText: `Value should be less than ${max}`,
    }),
  }),
  moreThan: (min: number) => ({
    name: "moreThan",
    validator: (value: number) => ({
      isValid: value > min,
      errorText: `Value should be more than ${min}`,
    }),
  }),

  isString: {
    name: "isString",
    validator: (value: unknown) => ({
      isValid: isString(value),
      errorText: "Value should be a string",
    }),
  },
};
