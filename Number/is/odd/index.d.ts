import type { EvenString } from "../even";

export type OddString  = '0' | '2' | '4' | '6' | '8';

export type IsOdd<Value extends number> = number extends Value
  ? boolean
  : `${Value}` extends `${string}${infer MaybeOdd}`
    ? MaybeOdd extends OddString
      ? true
      : MaybeOdd extends EvenString
        ? false
        : MaybeOdd extends ""
          ? `${Value}` extends OddString
            ? true
            : `${Value}` extends EvenString
              ? false
              : boolean
          : `${Value}` extends EvenString
            ? false
            : boolean
    : `${Value}` extends OddString
      ? true
      : `${Value}` extends EvenString
        ? false
        : boolean
  ;

/**
  * `Logic`
  * is odd
  * @param {number} value number
  * @returns {boolean} boolean
  * @example
  * isOdd(1); // false
  * isOdd(2); // true
  * isOdd(3); // false
  * isOdd(4); // true
  * isOdd(5); // false
  * isOdd(6); // true
  * isOdd(7); // false
  * isOdd(9); // false
  * isOdd(22); // true
  * isOdd(26); // true
  */
export default function isOdd<Value extends number>(value: Value): IsOdd<Value>;
