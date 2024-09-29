/**
  * @example
  * ```javascript
  * isArray([]) // true
  * isArray({}) // false
  * isArray({ length: 0 }) // false
  * ```
  * @param {*} value
  * @returns {boolean}
  * @name isArray
  */
export default function isArray(value: readonly any[]): true;
export default function isArray(value: any): value is readonly unknown[];

export function then(resolve: (value: typeof isArray) => any): any;
