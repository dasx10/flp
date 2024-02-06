import type { Max } from "../max";
import type { Min } from "../min";

export type Clump<Value extends number, MinValue extends number, MaxValue extends number> = Max<MinValue, Min<MaxValue, Value>>;

/**
  * @function `(x, min, max) => x > min ? x < max ? x : max : min`
  * @description return between min and max
  * @name clump
  * @param {number} value number
  * @param {number} min number
  * @param {number} max number
  * @returns {boolean} boolean
  * @example
  * ```
  * clump(-1, 1, 4); // 1
  * clump(0, 1, 4); // 1
  * clump(1, 1, 4); // 1
  * clump(2, 1, 4); // 2
  * clump(3, 1, 4); // 3
  * clump(4, 1, 4); // 4
  * clump(5, 1, 4); // 4
  * clump(6, 1, 4); // 4
  * clump(1, 3, 5); // 3
  * clump(6, 3, 5); // 6
  * ```
  */
export default function clump$$$<Value extends number, Min extends number, Max extends number>(value: Value, min: Min, max: Max): Clump<Value, Min, Max>;
