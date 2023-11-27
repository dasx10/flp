import type Lambda from "../../types/Lambda";
import type NumberExclude from "../types/NumberExclude";

export type Inc<Value extends number> = Value extends 0
 ? 1
 : Value extends -1
   ? 0
   : NumberExclude<number, Value>;

/**
  * `Math`
  * increment
  * `y = x + 1`
  * @param {number} value number
  * @returns {number} number
  * @example
  * inc(1); // 2
  * inc(2); // 3
  * inc(3); // 4
  * inc(0); // 1
  */
export default function inc<Value extends number>(value: Value): Inc<Value>;
