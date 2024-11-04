import type Space from "./Space.d.ts";

type TrimRight<Value extends string> = string extends Value
  ? Value
  : Value extends `${infer Head}${Space}`
    ? TrimRight<Head>
    : Value extends string
      ? Value
      : `${Value}`
;

export default TrimRight;
