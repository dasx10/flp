/**
  * @function
  * @name is
  * @alias xor
  * @summary identical operation.
  * @description Returns `true` if `value` is identical `next`.
  * @param {boolean} value
  * @param {boolean} next
  * @returns {boolean}
  * @example
  * ```
  * is(true, true) // true
  * is(true, false) // false
  * is(false, true) // false
  * is(false, false) // true
  * ```
  */
export default function _is(value: true,    next: true)    : true;
export default function _is(value: false,   next: false)   : true;
export default function _is(value: true,    next: false)   : false;
export default function _is(value: false,   next: true)    : false;
export default function _is(value: true,    next: boolean) : next is true;
export default function _is(value: false,   next: boolean) : next is false;
export default function _is(value: boolean, next: true)    : value is true;
export default function _is(value: boolean, next: false)   : value is false;
export default function _is(value: boolean, next: boolean) : boolean;
