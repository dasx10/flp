import type Lambda    from "../../types/Lambda";
import type Parameter from "../../types/Parameter";

declare var both: <
    Next  extends Lambda<any, any>,
   _Call  extends Lambda<any, any> = Lambda<Parameter<Next>, any>,
  __Value extends Parameter<Call> & Parameter<_Next> = Parameter<Call> & Parameter<_Next>
>(next: Next) => <
   Call extends  _Call,
 _Value extends __Value = __Value & Parameter<Call>,
>(call: Call) => <
  Value extends _Value,
>(value: Value) => ReturnType<Call | Next>;

export default both;
