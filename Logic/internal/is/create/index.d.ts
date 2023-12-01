export default function _createIs(): <Value, Next>(value: Value, next: Next) => value is Next;
export default function _createIs(): <Value, Next>(value: Value, next: Next) => next is Value;
