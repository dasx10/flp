/**
  * @deprecated
  * @template Value
  * @param {Value} value
  */
declare var type: {
  (value: string)    : "string";
  (value: number)    : "number";
  (value: boolean)   : "boolean";
  (value: symbol)    : "symbol";
  (value: undefined) : "undefined";
  (value: Function)  : "function";
  (value: object)    : "object";
  (value: bigint)    : "bigint";
  <Value>(value: Value) : Value extends string
    ? "string"
    : Value extends number
    ? "number"
    : Value extends boolean
    ? "boolean"
    : Value extends symbol
    ? "symbol"
    : Value extends undefined
    ? "undefined"
    : Value extends Function
    ? "function"
    : Value extends object
    ? "object"
    : Value extends bigint
    ? "bigint"
    : "string" | "number" | "boolean" | "symbol" | "undefined" | "object" | "function" | "bigint";

  (value: unknown)   : "string" | "number" | "boolean" | "symbol" | "undefined" | "object" | "function" | "bigint";
}

export default type;
