import type Lambda    from "../Types/Lambda";
import type Parameter from "../Types/Parameter";

type Target <Test extends Record<PropertyKey, Lambda<any, any>>> = {
  [Key in keyof Test]: Parameter<Test[Key]>
}

export default function where<Test extends Record<PropertyKey, Lambda<any, any>>>(test : Test) : <Value extends Target<Test>>(value : Value) => boolean;
