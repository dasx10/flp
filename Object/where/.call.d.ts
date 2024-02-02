export type WhereObject<Value extends Record<PropertyKey, any>> = {
  [Key in keyof Value]?: (value: Value[Key]) => any
}

export default function _where <
  Value extends Record<PropertyKey, any>,
  Test  extends WhereObject<Value>
 >(value: Value, test: Test) : boolean;
