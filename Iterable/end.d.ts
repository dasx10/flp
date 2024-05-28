export default function end<Value>(call: (value: Value) => any): (values: Iterable<Value>) => Iterable<Value>;
