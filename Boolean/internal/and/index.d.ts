/**
  * @summary and operator
  * @description Return true if both values are true. Otherwise, return false.
  * @function
  * @param {boolean} value
  * @param {boolean} next
  * @returns {boolean}
  * @example
  * ```
  * isTrue(true, true); // true
  * isTrue(true, false); // false
  * isTrue(false, true); // false
  * isTrue(false, false); // false
  * ```
  */
export default function _and(value: true,    next: true)  : true;
export default function _and(value: true,    next: false) : false;
export default function _and(value: false,   next: true)  : false;
export default function _and(value: boolean, next: true)  : value is true;
export default function _and(value: true, next: boolean)  : next  is true;
