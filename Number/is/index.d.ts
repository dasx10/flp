import type { IS } from "../internal/is";

declare function is<Next extends number>(next: Next): {
  <Value extends Next>(value: number): value is Next;
  <Value extends number>(value: Value): IS<Value, Next>;
}

export default is;
