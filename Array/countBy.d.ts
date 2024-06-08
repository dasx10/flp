export default function countBy<Return, Value>(call: (value: Value) => Return): (values: readonly Value[]) => Record<Return, number>;
