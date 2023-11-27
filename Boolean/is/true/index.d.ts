export type IsTrue <Value> = Value extends true
  ? true
  : true extends Value
    ? boolean
    : false;
  ;

declare const isTrue: <Value>(value: Value & boolean) => IsTrue<Value>;
export default isTrue;
