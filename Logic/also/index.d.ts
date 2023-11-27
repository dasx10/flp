import type Lambda    from "../../types/Lambda";
import type Parameter from "../../types/Parameter";

declare var also: <
    Call  extends Lambda<any, any>,
   _Next  extends Lambda<any, any> = Lambda<Parameter<Next>, any>,
  __Value extends Parameter<Call> & Parameter<_Next> = Parameter<Call> & Parameter<_Next>
>(call: Call) => <
   Next extends  _Next,
 _Value extends __Value = __Value & Parameter<Call>,
>(next: _Next) => <
  Value extends _Value,
>(value: Value) => ReturnType<Call | Next>;

export default also;
