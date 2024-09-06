type True  = true | (object & {}) | (readonly any[]);
type False = false | 0 | "" | null | undefined;

/**
  * @function
  * @name no
  * @alias complement
  * @param {Function} call
  * @returns {Function}
  * @description Return a function that returns `false` if the `call` is `true` and `true` if the `call` is `false`.
  * @example
  * ```javascript
  * var is5 = (value) => value === 5;
  * deny(is5)(5); // false
  * deny(is5)(6); // true
  * var T = (value) => true;
  * deny(T)(5); // false
  * deny(T)(6); // false
  * deny(T)(true); // false
  * deny(T)(false); // false
  *
  * var F = (value) => false;
  * deny(F)(5); // true
  * deny(F)(6); // true
  * deny(F)(false); // true
  * deny(F)(true); // true
  * ```
  */
export default function no<Value>(call: (value: Value) => True): (value: Value) => false;
export default function no<Value>(call: (value: Value) => False): (value: Value) => true;
export default function no<Value>(call: (value: Value) => any): (value: Value) => boolean;
