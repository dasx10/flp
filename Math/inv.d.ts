/**
  * Invert a number
  * @param {number} x
  * @return {number}
  * @example
  * ```javascript
  * inv(1) // -1
  * inv(-1) // 1
  * ```
  */
export default function inv(x: 0): 0;
export default function inv(x: 1): -1;
export default function inv(x: -1): 1;
export default function inv<X extends number>(x: X): number
export default function inv<Y extends number, X extends number>(x: Exclude<X, Y>): Exclude<Y, X>;
