export type GE<
  Value extends number = number,
  Test  extends number = number,
> = number extends Value
  ? boolean
  : number extends Test
    ? boolean
    : Value extends Test
      ? Test extends Value
        ? true
        : boolean
      : boolean;

/**
  * `Logic`
  * greater than or equal
  * @function
  * @name ge
  * @alias greaterThanOrEqual
  * @param {number} value number
  */
export default function ge<Next extends number>(next: Next): <Value extends number>(value: Value) => GE<Value, Next>;
