export type Identity<Type> = <Value extends Type>(value: Value) => Value;
/**
  * @example
  * identity(1); // 1
  * var testObject = {};
  * identity(testObject) === testObject; // true
  */
export default function identity<Value>(value: Value): Value;
