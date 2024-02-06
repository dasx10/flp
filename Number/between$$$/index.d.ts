import type NumberExclude from "../../../types/Number/NumberExclude";

import type lt from "../lt"
import type gt from "../gt"

/**
  * @function
  * @name between
  * @param {number} value
  * @param {number} min
  * @param {number} max
  * @returns {boolean}
  * @example
  * ```
  * between(1, 2, 3); // false
  * between(2, 2, 3); // false
  * between(3, 2, 3); // false
  * between(0, 0, 10); // false
  * between(1, 0, 10); // true
  * between(2, 0, 10); // true
  * between(3, 0, 10); // true
  * between(5, 0, 10); // true
  * between(6, 0, 10); // true
  * between(7, 0, 10); // true
  * between(8, 0, 10); // true
  * between(9, 0, 10); // true
  * between(10, 0, 10); // false
  * ```
  * @see {@link gt}
  * @see {@link lt}
  */
export default function between$$$<
  Value extends number,
  Min   extends number,
  Max   extends number,
>(value: Value, min: Min, max: Max): value is NumberExclude<Value, Min | Max>;
