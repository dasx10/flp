import type NumberExclude from "../types/NumberExclude";
import type lt from "../lt";
import type ge from "../ge";

export type GT<Value extends number, Test extends number> = number extends Test
  ? boolean
  : number extends Value
    ? boolean
    : Test extends Value
      ? Value extends Test
        ? false
        : boolean
      : boolean;

/**
  * @summary `x > y`
  * @description Checks if a number is greater than another number
  * @param {number} next number
  * @function
  * @name gt
  * @alias greaterThan
  * @see {@link lt}
  * @see {@link ge}
  * @example
  * var gt1 = gt(1);
  * gt1(1); // false
  * gt1(0); // false
  * gt1(-1); // false
  * gt1(2); // true
  * var gt0 = gt(0);
  * gt0(1); // true
  * gt0(0); // false
  */
export default function gt<Next extends number>(next: Next): number extends Next
  ? {
    <Value extends number>(value: Value): next is NumberExclude<Next, Value>;
  }
  : {
    <Value extends number>(value: Value): value is NumberExclude<Value, Next>;
    <Value extends number>(value: Value): GT<Value, Next>;
  };
