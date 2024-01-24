export default function _is(): {
  <Value, Next>(value: Value, next: Next): value is Next;
  <Value, Next>(value: Value, next: Next): next is Value;
}
