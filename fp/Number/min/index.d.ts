import type { Min } from "../internal/min";
import type max from "../max";

/**
  * @function
  * @name min
  * @alias minimum
  * @param {number} next number
  * @see {@link max}
  * @see {@link Math.min}
  */
export default function min<Next extends number>(next: Next): <Value extends number>(value: Value) => Min<Value, Next>;
