import type ArrayIndex from "../Types/ArrayIndex";
import Parameter from "../types/Parameter";

type CountBy<Values extends readonly any[], Key extends PropertyKey> = Values extends readonly []
  ? {}
  : { readonly [key in Key]: ArrayIndex<Values> }
;

type CountingBy<Value, Key = PropertyKey> = <Values extends readonly Value[]>(values: Values) => CountBy<Values, Key>;
type CountByFunction = <Call extends (value: any) => PropertyKey>(call: Call) => CountingBy<Parameter<Call>, ReturnType<Call>>;


/**
  * @example
  * ```javascript
  * countBy(Math.floor)([1.2, 2.3, 3.4, 4.5]); // { 1: 1, 2: 1, 3: 1, 4: 1 }
  * countBy(Math.abs)([-1, -2, -3, -4]); // { 1: 1, 2: 1, 3: 1, 4: 1 }
  * countBy(Math.abs)([-1, -2, -3, -4, 1, -2]); // { 1: 2, 2: 2, 3: 1, 4: 1 }
  * ```
  * @description Count the number of elements in an array
  * @param {function} call
  * @returns {function}
  */
declare const countBy: CountByFunction;
export const then: (resolve: (countBy: CountByFunction) => any) => any;
export default countBy;

