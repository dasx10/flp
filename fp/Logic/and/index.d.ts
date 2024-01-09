type Falsy = false | 0 | 0n | "" | null | undefined;

declare var and: <Next>(next: Next) => {
  <Value extends Falsy>(value: Value) : Value;
  <Value>(value: Value) : Value | Next;
};

export default and;

