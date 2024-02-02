/**
  * @function
  * @name concatRight
  * @param {Array} next
  * @returns {Function}
  * @example
  * ```
  * var numbers = [1, 2, 3, 4];
  * concat_([5])(numbers); // [5, 1, 2, 3, 4];
  * concat_([6, 7])(numbers); // [6, 7, 1, 2, 3, 4];
  * concat_([8, 9, 10])(numbers); // [8, 9, 10, 1, 2, 3, 4];
  * concat_(numbers)(numbers); // [1, 2, 3, 4, 1, 2, 3, 4];
  * ```
  * @see {Array.prototype.concat}
  */
export default function concat_<Next extends readonly any[]>(next: Next): <Values extends readonly any[]>(values: Values) => [...Next, ...Values];
