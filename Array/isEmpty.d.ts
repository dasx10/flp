/**
  * @example
  * ```javascript
  * isEmpty([]) // true
  * isEmpty([null]) // false
  * isEmpty([[]]) // false
  * isEmpty([undefined]) // false
  * isEmpty([1, 2, 3]) // false
  * ```
  * @param {Array} values
  * @returns {boolean}
  * @description Check if an array is empty
  * @name isEmpty
  * @alias isEmptyArray
  */
export default function isEmpty(values: readonly []): true;
export default function isEmpty(values: readonly [*, ...*] | readonly [...*, *]): false;
export default function isEmpty(values: readonly *[]) values is (readonly []);
export function then(resolve: (value: typeof isEmpty) => *): *;
