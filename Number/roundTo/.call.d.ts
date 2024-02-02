/**
  * @summary round to
  * @function
  * @name roundTo
  * @param {number} value number
  * @param {number} next number
  * @returns {number} number
  * @example
  * ```
  * roundTo(1.01, 1); // 1
  * roundTo(1.05, 1); // 1.1
  * roundTo(1.01, 2); // 1.01
  * roundTo(1.01, 3); // 1.01
  * roundTo(1.0005, 3); // 1.001
  * ```
  */
export default function roundTo(value: number, next: number): number;
