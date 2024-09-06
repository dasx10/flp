export default function some<Value>(call: (value: Value) => any): (values: Iterable<Value>) => boolean;
export var then: (call: (module: typeof some) => any) => <Value>(values: Iterable<Value>) => boolean;
