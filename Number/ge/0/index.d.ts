export type ExcludeNegative<Value extends number> = number extends Value
  ? number
  : `${Value}` extends `-${infer _}`
    ? _ extends `${number}`
      ? never
      : Value
    : Value
;

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
  * greater than or equal 0
  * @param {number} value number
  * @returns {boolean} boolean
  * @example
  * ge0(1); // false
  * ge0(0); // true
  * ge0(2); // false
  * ge0(3); // false
  */
export default function ge0<Value extends number>(value: OnlyPositive<Value>): true;
export default function ge0<Value extends number>(value: OnlyNegative<Value>): false;
export default function ge0<Value extends number>(value: Value): value is ExcludeNegative<Value>;

var ab: OnlyPositive<-21 | 1>

const a = ge0(ab)
