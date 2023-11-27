
import type { OddString } from "../odd";

export type EvenString = '1' | '3' | '5' | '7' | '9';

export type IsEven<Value extends number> = number extends Value
  ? boolean
  : `${Value}` extends `${string}${infer MaybeEven}`
    ? MaybeEven extends EvenString
      ? true
      : MaybeEven extends OddString
        ? false
        : MaybeEven extends ""
          ? `${Value}` extends EvenString
            ? true
            : `${Value}` extends OddString
              ? false
              : boolean
          : `${Value}` extends OddString
            ? false
            : boolean
    : `${Value}` extends EvenString
      ? true
      : `${Value}` extends OddString
        ? false
        : boolean
  ;

/**
  * `Logic`
  * is even
  * @param {number} value number
  * @returns {boolean} boolean
  * @example
  * isEven(1); // true
  * isEven(2); // false
  * isEven(3); // true
  * isEven(4); // false
  * isEven(5); // true
  * isEven(6); // false
  * isEven(7); // true
  * isEven(9); // true
  * isEven(22); // false
  * isEven(26); // false
  * isEven(27); // true
  */
export default function isEven<Value extends number>(value: Value): IsEven<Value>;
