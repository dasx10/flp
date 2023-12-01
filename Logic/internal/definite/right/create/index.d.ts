export default function _createDefiniteRight(): <Value, Next>(value: Value, next: Next, test: (next: Next, value: Value) => any) => Value | Next;
