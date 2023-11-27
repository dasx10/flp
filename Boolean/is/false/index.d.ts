export type IsFalse <Value> = Value extends false
  ? true
  : false extends Value
    ? boolean
    : false;
  ;

declare const isFalse: <Value>(value: Value & boolean) => IsFalse<Value>;
export default isFalse;
