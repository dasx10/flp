/**
  * @function
  * @name __
  * @param {*} x
  * @returns {Function}
  * @example
  * ```javascript
  * var sub = (y) => (x) => x - y;
  * sub(10)(3) // -7
  * __(10)(sub)(3) // 7
  * sub(3)(10) === __(10)(sub)(3) // true
  * ```
  */
export default function __<X>(x: X): <Return, Y>(call: (y: Y) => (x: X) => Return) => (y: Y) => Return;
