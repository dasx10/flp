import type Spaces from "../../types/Spaces";

import type trim    from "..";
import type trimEnd from "../end";

export type TrimStart<Value extends string> = string extends Value
  ? string
  : Value extends `${Spaces}${infer Next}`
    ? TrimStart<Next>
    : Value extends string
      ? Value
      : Value["toString"] extends Function
        ? TrimStart<ReturnType<Value["toString"]>>
        : `${Value}`
;

/**
  * @see {@link String.prototype.trimStart} native
  * @see {@link https://tc39.es/ecma262/#sec-string.prototype.trimstart} ecma262
  * @see {@link trim} similar
  * @see {@link trimEnd} similar
  */
export default function trimStart<Value extends string>(value: Value): TrimStart<Value>;
