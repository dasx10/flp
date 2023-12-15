/**
  * @description
  * @function
  * @name limit
  * @param {number} length
  */
export default function limit<Length extends number>(length: Length): <Values extends readonly any[]>(values: Values) => Values[number][];
