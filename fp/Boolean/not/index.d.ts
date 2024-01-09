/**
  * @summary not operator
  * @description Return true if value is false. Otherwise, return false.
  * @function
  * @name not
  * @param {boolean} value
  * @returns {boolean}
  * @example
  * ```
  * not(true); // false
  * not(false); // true
  * ```
  */
export default function not(value : true)    : false;
export default function not(value : false)   : true;
export default function not(value : boolean) : value is false;
