import type Lambda    from "../../types/Lambda";
import type Parameter from "../../types/Parameter";

declare function x <
    Call  extends Lambda<any, any>,
   _Next  extends Lambda<ReturnType<Call>, any> = Lambda<ReturnType<Call>, any>,
  __Value extends Parameter<Call>               = Parameter<Call>
>(call: Call): <
   Next  extends  _Next,
  _Value extends __Value,
>(next: Next) => <Value extends _Value>(value: Value) => ReturnType<Next>;

declare function x <
    Call extends () => any,
   _Next extends Lambda<ReturnType<Call>, any> = Lambda<ReturnType<Call>, any>,
>(call: Call): <Next extends _Next>(next: Next) => () => ReturnType<Next>;

export default x;
