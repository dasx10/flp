declare var isTypeOf: {
  <Is extends "boolean" | "number" | "bigint" | "symbol" | "undefined" | "string" | "object" | "function">(is: Is): (value: unknown) => boolean
}

export default isTypeOf;
