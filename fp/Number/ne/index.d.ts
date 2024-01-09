export type NE<Value extends number, Test extends number> = number extends Test
  ? boolean
  : number extends Value
    ? boolean
    : Test extends Value
      ? boolean
      : Value extends Test
        ? boolean
        : true
;


export default function ne<Next extends number>(next: Next): number extends Next
? {
  <Value extends Next>(value: Value): next is Exclude<Value, Next>
}
: {
  <Value extends Next>(value: Value): value is Exclude<Next, Value>
  <Value extends number>(value: Value): NE<Value, Next>;
}
