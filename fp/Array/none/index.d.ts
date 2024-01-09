import type Lambda    from "../../types/Lambda";
import type Parameter from "../../types/Parameter";

/**
  * @example
  * var noneZero = none(equals(0));
  * noneZero([0, 1, 2]); // false
  * noneZero([1, 2, 3]); // true
  */
declare var none: <
   Call   extends Lambda<any, any>,
  _Values extends readonly Parameter<Call>[] = readonly Parameter<Call>[]
>(call: Call) => <
  Values extends _Values,
>(values: Values) => boolean;

export default none;
