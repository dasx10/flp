import type Space from "./Space.d.ts";

type TrimLeft <Value extends string> = string extends Value
  ? string
  : Value extends `${infer Left}${infer Right}`
    ? Left extends Space
      ? TrimLeft<Right>
      : Value
    : Value extends string
      ? Value
      : `${Value}`
;

export default TrimLeft;
