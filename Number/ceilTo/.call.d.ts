/**
  * @summary ceil to
  * @function
  * @name ceilTo
  * @param {number} value number
  * @param {number} next number
  * @returns {number} number
  * @example
  * ```
  * ceilTo(1.01, 1); // 1
  * ceilTo(1.05, 1); // 1
  * ceilTo(1.01, 2); // 1.01
  * ceilTo(1.019, 2); // 1.01
  * ceilTo(1.01, 3); // 1.01
  * ceilTo(1.0005, 3); // 1
  * ```
  */
export default function ceilTo(value: number, next: number): number;
