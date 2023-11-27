import type NumberExclude from "../types/NumberExclude";

export type LT<Value extends number, Test extends number> = number extends Test
  ? boolean
  : number extends Value
    ? boolean
    : Test extends Value
      ? Value extends Test
        ? false
        : boolean
      : boolean
    ;

/**
  * @summary `x < y`
  * @function
  * @name lt
  * @alias lessThan
  * @description Checks if a number is less than another number
  * @function
  * @name lt
  * @alias lessThan
  * @param {number} next number
  * @example
  * var lt0 = lt(0);
  * lt0(1);  // false
  * lt0(0);  // false
  * lt0(-2); // true
  */
export default function lt<Next extends number>(next: Next): number extends Next
? {
  <Value extends number>(value: Value): value is NumberExclude<Next, Value>;
  <Value extends number>(value: Value): LT<Value, Next>;
}
: {
  <Value extends number>(value: Value): next is NumberExclude<Value, Next>;
}
;
