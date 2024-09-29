/**
  * @example
  * ```javascript
  * ltLen(3)([1, 2, 3]) // false
  * ltLen(3)([1, 2]) // true
  * ltLen(3)([1, 2, 3, 4]) // false
  * ltLen(3)([1]) // true
  * ltLen(3)([]) // true
  * ```
  * @param {number} length
  * @name ltLen
  * @alias lessThanLength
  */
export default function ltLen<Length extends number>(length: Length): <Values extends readonly any[]>(values: Values) => boolean;
