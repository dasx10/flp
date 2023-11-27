export type Dec<Value extends number> = Value extends 0
  ? -1
  : Value extends 1
    ? 0
    : Exclude<number, Value>
;

export default function dec<Value extends number>(value: Value): Dec<number, Value>;
