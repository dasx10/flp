/**
  * @summary floor to
  * @function
  * @name floorTo
  * @param {number} value number
  * @param {number} next number
  * @returns {number} number
  * @example
  * ```
  * floorTo(1.01, 1); // 1
  * floorTo(1.05, 1); // 1
  * floorTo(1.01, 2); // 1.01
  * floorTo(1.019, 2); // 1.01
  * floorTo(1.01, 3); // 1.01
  * floorTo(1.0005, 3); // 1
  * ```
  */
export default function floorTo(value: number, next: number): number;
