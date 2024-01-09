import type Lambda    from "../../types/Lambda";
import type Parameter from "../../types/Parameter";

declare var bothConstructorIdenticalString
   : <Test  extends Lambda<string, any>>(test: Test)
  => <Value extends string | Parameter<Test>>(value: Value)
  => false | ReturnType<Test>;

export default bothConstructorIdenticalString;
