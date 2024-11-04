import type Parameter from "../types/Parameter.d.ts";

type AvgsingBy<Value> = <Values extends readonly Value[]>(values: Values) => number;
type AvgsFunction     = <Call extends (value: any) => number>(call: Call) => AvgsingBy<Parameter<Call>>;


/**
  * @example
  * ```javascript
  * avgsBy(Math.floor)([1.2, 2.3, 3.4, 4.5]); // 2.5
  * avgsBy(Math.abs)([-1, -2, -3, -4]); // 2
  * avgsBy((point) => point.x)([{x: 1, y: 0}, {x: 2, y: 0}]); // 1.5
  * avgsBy((point) => point.y)([{x: 0, y: 1}, {x: 0, y: 3}]); // 2
  * avgsBy((x) => x)([1, 2, 3, 4]); // 2.5
  * avgsBy((x) => x)([]); // NaN
  * ```
  * @description Get the average value of an array
  * @param {function} call
  * @returns {function}
  */
declare const avgsBy: AvgsFunction;
export default avgsBy;
export var then: (resolve: (avgsBy: AvgsFunction) => any) => any;
