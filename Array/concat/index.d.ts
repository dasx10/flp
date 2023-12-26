/**
  * @function
  * @name concat
  * @example
  * ```
  * var numbers = [1, 2, 3, 4];
  * concat([5])(numbers); // [1, 2, 3, 4, 5];
  * concat([6, 7])(numbers); // [1, 2, 3, 4, 6, 7];
  * concat([8, 9, 10])(numbers); // [1, 2, 3, 4, 8, 9, 10];
  * ```
  */
export default function concat<Next extends readonly any[]>(next: Next): <Values extends readonly any[]>(values: Values) => [...Values, ...Next];
