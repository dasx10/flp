import type ArgumentInt from "../Types/ArgumentInt";

/**
  * @function
  * @name isInt
  * @memberof Number
  * @param {number} x
  * @returns {boolean}
  * @example
  * ```javascript
  * isInt(1); // true
  * isInt(0); // true
  * isInt(-1); // true
  * ```
  */
export default function isInt<X extends number>(x: X): x is ArgumentInt<X>;
export var then: (resolve: (module: typeof isInt) => any) => any;
