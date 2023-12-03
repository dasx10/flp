import type Lambda    from "../../types/Lambda";
import type Parameter from "../../types/Parameter";

export default function where<Test extends Record<PropertyKey, Lambda>>(test: Test)
  : <Value extends Record<PropertyKey, any>>(value: Value | { [key in keyof Test]?: Parameter<Test[key]> })
  => boolean
;
