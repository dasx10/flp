/**
  * @function
  * @name after
  * @description Returns the values after the given index
  * @param {Array} values
  * @param {number} index
  * @returns {Array}
  * @example
  * after([1, 2, 3, 4, 5], 2) // [3, 4, 5]
  * after([1, 2, 3, 4, 5], 5) // []
  * after([1, 2, 3, 4, 5], 0) // [1, 2, 3, 4, 5]
  */
export default function _after<Values extends readonly any[], Index extends number>(values: Values, index: Index): Values[number][];
