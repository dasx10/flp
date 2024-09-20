import type MustUInt from "../Types/MustUInt";

/**
  * @description Check if a number is an unsigned integer
  * @function
  * @name isUint
  * @alias isUnsignedInteger
  * @memberof Number
  * @param {number} x
  * @returns {boolean}
  * @example
  * ```javascript
  * isUint(1); // true
  * isUint(0); // true
  * isUint(-1); // false
  * isUint(1.1); // false
  * isUint(-1.1); // false
  * isUint(NaN); // false
  * isUint(Infinity); // false
  * isUint(-Infinity); // false
  * ```
  */
export default function isUint<X>(x: X): x is MustUInt<X>;
export var then: (resolve: (module: typeof isUint) => any) => any;
