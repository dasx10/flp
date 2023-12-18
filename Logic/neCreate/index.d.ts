export default function neCreate(): <Next>(next: Next) => <Value>(value: Value) => value is Exclude<Value, Next>;
