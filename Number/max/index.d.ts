import type { Max } from "../internal/max";
import type min from "../min";

/**
  * @function
  * @name max
  * @alias maximum
  * @param {number} next number
  * @see {@link max}
  * @see {@link Math.max}
  */
export default function max<Next extends number>(next: Next): <Value extends number>(value: Value) => Max<Value, Next>;
