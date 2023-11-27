import type Lambda    from "../../types/Lambda";
import type Parameter from "../../types/Parameter";

declare var when
   : <Test extends Lambda<any, any>>(test: Test)
  => <Call extends Lambda<Parameter<Test>, any>>(call: Call)
  => <Value extends Parameter<Call>>(value: Value)
  => ReturnType<Call> | Value;

export default when;
