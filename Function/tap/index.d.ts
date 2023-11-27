/**
  * @see {@link https://tc39.es/ecma262/#sec-comma-operator} ecma262
  */
export default function tap<Value>(call: (value: Value) => any): <Next extends Value>(value: Next) => Next;
