/**
  * @name isIterable
  * @function
  * @param {unknown} x
  * @return {boolean}
  * @example
  * ```javascript
  * isIterable([1, 2, 3]) // true
  * isIterable(new Map()) // true
  * isIterable(new Set([1, 2, 3])) // true
  * isIterable("hello") // true
  * isIterable(void function*(){}()) // true
  * isIterable(1) // false
  * isIterable({}) // false
  * isIterable(null) // false
  * isIterable(undefined) // false
  * isIterable(new Date()) // false
  * isIterable(new Error()) // false
  * isIterable(new WeakMap()) // false
  * isIterable(new WeakSet()) // false
  * ```
  */
export default function isIterable(x:Iterable<any>): true;
export default function isIterable(x:unknown): x is Iterable<unknown>;
