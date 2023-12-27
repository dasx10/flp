/**
  * @description Returns the original array if the length of the array has not changed.
  * @function
  * @name dimension
  * @example
  * ```
  * var numbers = [1, 2, 3, 4];
  * dimension(numbers)(numbers); // [1, 2, 3, 4];
  * dimension(numbers)(numbers.filter(x => x < 10)); // [1, 2, 3, 4];
  * dimension(numbers)(numbers.filter(x => x < 10)) === numbers; // true;
  * dimension(numbers)(numbers.filter(x => x < 2)); // [1];
  * ```
  */
export default function dimension<Next extends readonly any[]>(next: Next): <Values extends readonly Next[number][]>(values: Values) => Values | Next;
