import type Index from "../../types/Index";

/**
  * @template {readonly any[]} Values
  * @param {Values} values any array
  * @returns {() => Values["length"] & number} Returns a function that always returns the same array length
  */
declare var lengthAlways: <Values extends readonly any[]>(values: Values) => () => Values["length"] & Index;
export default lengthAlways;
