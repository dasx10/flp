import Lambda from "../../types/Lambda";
import type always from "../always";

export type Identity<Type> = Lambda<Type, Type>;

/**
  * @summary `x = x`
  * @description return always input parameter
  * @function `x => x`
  * @name identity
  * @param {Value} value
  * @returns {Value}
  * @see {@link always}
  * @example
  *
  * ```
  * identity(1); // 1
  * var testObject = {};
  * identity(testObject) === testObject; // true
  * ```
  */
export default function identity<Value>(value: Value): Value;
