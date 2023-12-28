/**
  * @summary or operator
  * @description Return true if either value is true. Otherwise, return false.
  * @function
  * @name _or
  * @param {boolean} value
  * @param {boolean} next
  * @returns {boolean}
  * @example
  * ```
  * _or(true, true); // true
  * _or(true, false); // true
  * _or(false, true); // true
  * _or(false, false); // false
  * ```
  */
export default function _or(value: false,   next: false)   : false;
export default function _or(value: false,   next: true)    : true;
export default function _or(value: true,    next: boolean) : true;
export default function _or(value: boolean, next: true)    : true;
export default function _or(value: boolean, next: boolean) : boolean;
export default function _or(value: false,   next: boolean) : next is true;
