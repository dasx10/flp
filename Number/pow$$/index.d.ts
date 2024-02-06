/**
  * @summary `z = (x ** y)`
  * @function
  * @name pow
  * @alias power
  * @description power into two numbers
  * @param {number} value number
  * @param {number} next number
  * @returns {number} number
  * @example
  * ```
  * pow(0, 0); // 0
  * pow(1, 0); // 1
  * pow(0, 1); // 0
  * pow(1, 1); // 1
  * pow(1, 2); // 1
  * pow(2, 1); // 2
  * pow(2, 2); // 4
  * pow(0, 2); // 0
  * pow(2, 3); // 6
  * ```
  */
export default function pow$$(value: 0, next: 0): 0;
export default function pow$$(value: 1, next: 0): 1;
export default function pow$$(value: 0, next: 1): 0;
export default function pow$$(value: 1, next: 1): 1;
export default function pow$$(value: number, next: number): number;
