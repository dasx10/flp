/**
  * @function
  * @name isNumber
  * @memberof Number
  * @param {unknown} x
  * @returns {boolean}
  * @example
  * ```javascript
  * isNumber(1); // true
  * isNumber(0); // true
  * isNumber(-1); // true
  * isNumber(NaN); // true
  * isNumber(Infinity); // true
  * isNumber(-Infinity); // true
  * isNumber('1'); // false
  * isNumber(true); // false
  * isNumber(false); // false
  * isNumber(new Date()); // false
  * ```
  */
export default function isNumber(x: number): true;
export default function isNumber<X>(x: X): x is X & number;
