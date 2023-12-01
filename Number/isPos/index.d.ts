import type NumberExcludeNegative from "../../types/NumberExcludeNegative";

export type OnlyNegative<Value extends number> = number extends Value
  ? never
  : `${Value}` extends `-${infer _}`
    ? _ extends `${number}`
      ? Value
      : never
    : never;

export type OnlyPositive<Value extends number> = number extends Value
  ? never
  : `${Value}` extends `-${number}`
    ? never
    : `-${Value}` extends `${number}`
      ? Value
      : never
;

/**
  * @function
  * @name isPos
  * @alias isPositive
  * @alias gt0
  * @alias gtZero
  * greater than or equal 0
  * @param {number} value number
  * @returns {boolean} boolean
  * @example
  * isPos(-1); // false
  * isPos(0); // false
  * isPos(1); // true
  * isPos(2); // true
  * isPos(3); // true
  */
export default function isPos<Value extends number>(value: OnlyPositive<Value>): true;
export default function isPos<Value extends number>(value: OnlyNegative<Value>): false;
export default function isPos<Value extends number>(value: Value): value is NumberExcludeNegative<Value>;
