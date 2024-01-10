import type { Max } from "../max";
import type { Min } from "../min";

export type Clump<Value extends number, MinValue extends number, MaxValue extends number> = Max<MinValue, Min<MaxValue, Value>>;

/**
  * `Logic`
  * @param {number} value number
  * @param {number} min number
  * @param {number} max number
  * @returns {boolean} boolean
  * @example
  * _clump(-1, 1, 4); // 1
  * _clump(0, 1, 4); // 1
  * _clump(1, 1, 4); // 1
  * _clump(2, 1, 4); // 2
  * _clump(3, 1, 4); // 3
  * _clump(4, 1, 4); // 4
  * _clump(5, 1, 4); // 4
  * _clump(6, 1, 4); // 4
  * _clump(1, 3, 5); // 3
  * _clump(6, 3, 5); // 6
  */
export default function _clump<Value extends number, Min extends number, Max extends number>(value: Value, min: Min, max: Max): Clump<Value, Min, Max>;
