/**
  * @summary append to array
  * @description Create new array and append value.
  * @function
  * @name append
  * @param {*} value
  * @returns {Function} `(values: Array) => Array`
  * @example
  * ```
  * var numbers = [1, 2, 3, 4];
  * append(5)(numbers); // [1, 2, 3, 4, 5];
  * append(6)(numbers); // [1, 2, 3, 4, 6];
  * append(7)(numbers); // [1, 2, 3, 4, 7];
  * append(8)([]); // [8];
  * ```
  */
export default function append<Value>(value: Value): <Values extends readonly any[]>(values: Values) => [...Values, Value];
