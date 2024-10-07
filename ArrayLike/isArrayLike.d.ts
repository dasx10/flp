/**
  * @example
  * ```javascript
  * isArrayLike([1, 2, 3]); // true
  * isArrayLike({}); // false
  * isArrayLike({ length: 0 }); // true
  * isArrayLike(0); // false
  * isArrayLike(""); // true
  * isArrayLike([]); // true
  * isArrayLike(null); // false
  * isArrayLike(undefined); // false
  * isArrayLike(NaN); // false
  * isArrayLike(false); // false
  * isArrayLike(() => {}); // false
  * ```
  * @description Check if value is array-like
  * @param {*}
  * @returns {boolean}
  * @name isArrayLike
  */
export default function isArrayLike(value: ArrayLike<*>): true;
export default function isArrayLike(value: unknown): value is ArrayLike<any>;

export const then: (resolve: (module: typeof isArrayLike) => *) => *;
