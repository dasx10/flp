export default function delay <Next extends number>(next: Next): <Value>(value: Value) => Promise<Value>;
