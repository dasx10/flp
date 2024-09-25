/**
  * @example
  * ```javascript
  * upper("hello") // "HELLO"
  * upper("HELLO") // "HELLO"
  * upper("Hello") // "HELLO"
  * upper("hELLO") // "HELLO"
  * ```
  * @name upper
  * @alias uppercase
  * @alias toUpper
  * @alias toUpperCase
  * @description Convert a string to uppercase
  * @param {string} x
  * @returns {string}
  * @see {@link String.prototype.toUpperCase}
  */
export default function upper<X extends string>(x: X): Uppercase<X>;
