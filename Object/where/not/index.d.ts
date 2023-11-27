import type Lambda    from "../../../types/Lambda";
import type Parameter from "../../../types/Parameter";

declare var whereNot
   : <Test  extends Record<PropertyKey, Lambda<any, any>>>(test: Test)
  => <Value extends Record<PropertyKey, any> & { [key in keyof Test]?: Parameter<Test[key]>}>(value: Value)
  => boolean;

export default whereNot;
