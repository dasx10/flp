export default function but<Return, Value>(call: (value: Value) => Return): (value: Value) => Return | Value;
export var then = (resolve: (value: typeof but) => any) => any;
