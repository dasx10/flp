export default function map<Return, Value>(call: (value: Value[keyof Value], key: keyof Value, values: Value) => Return): (value: Value) => Record<keyof Value, Return>;
