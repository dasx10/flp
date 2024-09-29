/**
  * @example
  * ```javascript
  * sum([1, 2, 3]); // 6
  * sum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]); // 55
  * sum([]) // 0
  * ```
  * @param {readonly number[]} values
  * @returns {number}
  * @name sum
  */
export default function sum(values: readonly number[]): number;
export var then: (resolve: (module: typeof sum) => any) => any;
