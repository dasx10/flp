export default function whenIsUndefined<Return, Value>(call: (value: Value) => Return): <Next extends Value | undefined>(value: Next) => Return | Exclude<Next, undefined>;

