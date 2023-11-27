import type Lambda    from "../../types/Lambda";
import type Parameter from "../../types/Parameter";

declare function o <
  Next    extends Lambda<any, any>,
  _Call   extends Lambda<ReturnType<Next>, any> = Lambda<ReturnType<Next>, any>,
  __Value extends Parameter<Call>               = Parameter<Call>
>(next: Next)
  : <
    Call   extends Lambda<__Value, Parameter<Next>>,
    _Value extends Parameter<Call> = Parameter<Call>
  >(call: Call)
  => <
    Value extends _Value
  >(value: Value) => ReturnType<Next>;

export default o;
