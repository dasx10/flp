export default function _createDefinite(): <Value, Next>(value: Value, next: Next, test: (value: Value, next: Next) => any) => Value | Next;
