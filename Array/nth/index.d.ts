import type _Index from "../../types/Index";
/**
  * @template {number} Index
  * @param {Index} index
  * @returns {<Values extends readonly any[]>(values: Values) => Values[Index]}
  */
declare var nth: <Index extends _Index>(index: Index) => <Values extends readonly any[]>(values: Values) => Values[Index];
export default nth;
