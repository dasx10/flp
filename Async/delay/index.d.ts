import type Lambda    from "../../types/Lambda";
import type Parameter from "../../types/Parameter";

declare var delay: <
    Time  extends number,
   _Value extends any = any,
  __Call  extends Lambda<_Value, any> = Lambda<_Value, any>
>(time: Time) => <
   Value extends _Value = Parameter<_Call>,
  _Call  extends __Call & Lambda<Value, ReturnType<__Call>> = __Call & Lambda<Value, ReturnType<__Call>>,
>(value: Value) => <Call extends _Call>(call: Call) => ReturnType<typeof setTimeout>;

 export default delay;
