/**
  * @template Next
  * @template Value
  * @param {Next} next
  * @param {Value} value
  * @example
  * ```
  * eq({ x: 1 }, { x: 1 }); // true
  * eq({ x: 1 }, { x: 2 }); // false
  * eq({ x: 1 }, { y: 1 }); // false
  * eq([1, 2, 3], [1, 2, 3]); // true
  * eq([1, 2, 3], [1, 2, 4]); // false
  * eq(1, 1); // true
  * eq(1, 2); // false
  * eq(null, null); // true
  * eq(null, undefined); // false
  * ```
  */
export default function eq<Value, Next>(value: Value, next: Next): boolean;
