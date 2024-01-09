export default function _ap<Return>(call: () => Return);
export default function _ap<Value, Return>(call: (value: Value) => Return, value: Value);
