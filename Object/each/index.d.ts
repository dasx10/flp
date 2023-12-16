export default function each<Value>(call: (value: Value[keyof Value], key: keyof Key, values: Value) => any): (value: Value) => any;
