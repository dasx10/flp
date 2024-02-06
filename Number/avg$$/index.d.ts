/**
  * @function `(x, y) => (x + y) / 2`
  * @name avg
  * @alias average
  * @param {number} values
  * @param {number} next
  * @returns {number}
  * @example
  * ```
  * avg(1, 2); // 1.5
  * avg(2, 1); // 1.5
  * avg(1, 1); // 1
  * avg(2, 2); // 2
  * avg(0, 2); // 1
  * avg(2, 0); // 1
  * ```
  */
export default function avg$$(values: number, next: number): number;
