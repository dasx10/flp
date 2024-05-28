export default function includes<Value>(value: Value): {
  (values: readonly []): false;
  <Next>(values: readonly Exclude<Next, Value>[]): false;
  <Next extends Value>(values: readonly (Value | Next)[]): boolean;
  <Next>(values: readonly Next[]): values is (Value | Next)[];
};
