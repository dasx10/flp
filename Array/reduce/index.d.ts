import type Lambda    from "../../types/Lambda";
import type Parameter from "../../types/Parameter";

/**
  * @template {(next: any) => <T>(value: T) => T} Call
  * @param {Call} call
  * @see {Array["reduce"]}
  * @example
  * var sum = reduce(add)(0);
  * sum([1, 2, 3]); // 6
  */
declare var reduce
   : <
     Call   extends Lambda<any, Lambda<any, any>>,
    _Value  extends ReturnType<Parameter<Call>> = ReturnType<Parameter<Call>>,
   __Values extends readonly Parameter<Call>[]  = readonly Parameter<Call>[],
   >(call: Call)
  => <
    Value  extends  _Value,
   _Values extends __Values,
  >(value: Value)
  => <Values extends _Values>(values: Values)
  => ReturnType<ReturnType<Call>>

export default reduce;
