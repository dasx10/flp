type Test<Type> = {
  (value: Type): true;
  <Value extends Exclude<PropertyKey | object | bigint | boolean | string, Type>>(value: Value): false;
  (value: unknown): value is Type;
}

export default Test;
