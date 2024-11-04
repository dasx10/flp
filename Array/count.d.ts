import type ArrayIndex from "../Types/ArrayIndex";
import type Parameter from "../types/Parameter";

type ArrayCount<Values extends readonly any[]> = ArrayIndex<Values> | Values["length"];
type Counting<Value> = <Values extends readonly Value[]>(values: Values) => ArrayCount<Values>;
type CountFunction = <Call extends (value: any) => boolean>(call: Call) => Counting<Parameter<Call>>

/**
  * @example
  * ```javascript
  * count(x => x)([1, 2, 3]); // 3
  * count(x => x)([]); // 0
  * count(x => x > 1)([1, 2, 3]); // 2
  * count(x => x > 2)([1, 2, 3]); // 1
  * count(x => x > 3)([1, 2, 3]); // 0
  * count(x => x < 3)([1, 2, 3]); // 2
  * count(x => x < 2)([1, 2, 3]); // 1
  * count(x => x < 1)([1, 2, 3]); // 0
  * count(x => x === 1)([1, 2, 3]); // 1
  * count(x => x === 1)([1, 2, 3, 1]); // 2
  * count(x => x === 1)([1, 2, 3, 1, 1]); // 3
  * ```
  * @description Count the number of elements in an array
  * @function
  * @param {function} call
  * @returns {function}
  * @name count
  */
declare const count: CountFunction;
export default count;
export const then: (resolve: (count: CountFunction) => any) => any;
