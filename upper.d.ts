/**
  * @function
  * @name upper
  * @description Convert a string to uppercase
  * @param {string} x
  * @returns {string}
  * @example
  * ```javascript
  * upper("hello") // "HELLO"
  * upper("HELLO") // "HELLO"
  * ```
  */
export default function upper<X extends string>(x: X): Uppercase<X>;
export default function upper(x: string): string;
