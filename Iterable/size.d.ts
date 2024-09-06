/**
  * @function
  * @name size
  * @alias length
  * @param {Iterable} x
  * @return {number}
  * @example
  * ```javascript
  * var test = function* values() { yield 1; yield 2; yield 3; }
  * size(test()) // 3
  * size([1, 2, 3]) // 3
  * size(new Set([1, 2, 3])) // 3
  * size("test") // 4
  * ```
  */
export default function size(x: Iterable<any>): number;
export var then: (resolve: (module: typeof size) => void) => void;
