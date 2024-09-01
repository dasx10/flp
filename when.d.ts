type Falsy = false | undefined | null | 0 | "";

export default function when<Value>(test: (value: Value) => Falsy): (call: any) => <Next extends Value>(value: Next) => Next;
export default function when<Value>(test: (value: Value) => any): <Return>(call: (value: Value) => Return) => (value: Value) => Return | Value;

export default function when<Predicate, Value>(test: (value: Value) => any): <Return>(call: (value: Value) => Return) => {
  (value: Value): Return | Value;
  (value: Predicate): Value;
}

export var then: (resolve: (value: typeof when) => any) => any
