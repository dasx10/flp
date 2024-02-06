/**
  * @function `(x, y) => x - y`
  * @name sub
  * @alias subtract
  * @param {number} value
  * @param {number} next
  * @returns {number}
  * @example
  * ```
  * sub(3, 2); // 1
  * sub(2, 1); // 1
  * sub(1, 1); // 0
  * sub(2, 2); // 0
  * sub(0, 2); // -2
  * sub(2, 0); // 2
  * sub(0, 0); // 0
  * sub(-1, 1); // -2
  * sub(-2, 2); // -4
  * sub(-3, 3); // -6
  * sub(-4, 4); // -8
  * sub(-5, 5); // -10
  * ```
  */
export default function sub$$(value: 1, next: 1): 0;
export default function sub$$(value: 0, next: -1): 1;
export default function sub$$(value: 0, next: 1): -1;
export default function sub$$<Value extends number>(value: number, next: 0): Value;
export default function sub$$(value: number, next: number): number;
