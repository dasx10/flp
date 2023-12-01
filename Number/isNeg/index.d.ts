import type lt    from "../lt";
import type isPos from "../isPos";
import type nePos from "../nePos";
import type neNeg from "../neNeg";


/**
  * @summary `x < 0`
  * @description Checks if a number is less than 0
  * @function
  * @name isNeg
  * @alias lessThanZero
  * @alias isNegative
  * @alias lt0
  * @param {number} value number
  * @returns {boolean} boolean
  * @see {@link nePos}
  * @see {@link neNeg}
  * @see {@link isPos}
  * @see {@link lt}
  * @example
  * isNeg(1); // false
  * isNeg(0); // false
  * isNeg(-1); // true
  * isNeg(-2); // true
  */
export default function isNeg(value: 1 | 0): false;
export default function isNeg(value: -1): true;
export default function isNeg<Value extends Number>(value: Value): boolean;
