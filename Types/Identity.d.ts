type Identity<Value = unknown> = {
  <Next extends Value>(next: Next): Next;
  (value: Value): Value;
}

export default Identity;
