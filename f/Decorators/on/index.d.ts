export default function on<Value, Return>(call: (value: Value) => Return): <NextReturn>(next: (value: Return) => NextReturn) => (value: Value) => NextReturn;
