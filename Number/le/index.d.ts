export type LE<
  Value extends number = number,
  Test  extends number = number,
> = number extends Value
  ? boolean
  : number extends Test
    ? boolean
    : Value extends Test
      ? Test extends Value
        ? true
        : boolean
      : boolean;

export default function le<Next extends number>(next: Next): <Value extends number>(value: Value) => LE<Value, Next>;
