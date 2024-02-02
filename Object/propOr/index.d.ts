export default function propOr<Next>(next: Next): <Key extends PropertyKey>(key: Key)
  => <Value>(value: Value)
  => Value[Key] | Next;
