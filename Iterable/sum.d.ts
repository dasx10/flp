/**
  * @example
  * ```javascript
  * var test = function* values() { yield 1; yield 2; yield 3; }
  * sum(test()) // 6
  * sum([1, 2, 3]) // 6
  * sum(new Set([1, 2, 3])) // 6
  * ```
  * @function
  * @param {Iterable<number>} iterable
  * @return {number}
  */
export default function sum(iterable: Iterable<number>): number
