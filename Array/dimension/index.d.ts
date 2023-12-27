/**
  * @description Returns the original array if the length of the array has not changed.
  * @function
  * @name dimension
  * @param {Array} newValues
  * @returns {Function} `(values: Array) => Array`
  * @example
  * ```
  * var numbers = [1, 2, 3, 4];
  * dimension(numbers)(numbers); // [1, 2, 3, 4];
  * dimension(numbers.filter(x => x < 10))(numbers); // [1, 2, 3, 4];
  * dimension(numbers.filter(x => x < 10))(numbers) === numbers; // true;
  * dimension(numbers.filter(x => x < 2))(numbers); // [1];
  * ```
  */
export default function dimension<NewValues extends readonly any[]>(newValues: NewValues): <Values extends readonly NewValues[number][]>(values: Values) => Values | NewValues;
