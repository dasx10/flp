import type Spaces from "../types/Spaces";

import type prototype from "../../../Adapter/prototype";

import type trim    from "..";
import type trimStart from "../start";

export type TrimEnd<Value extends string> = string extends Value
  ? string
  : Value extends `${infer Next}${Spaces}`
    ? TrimEnd<Next>
    : Value extends string
      ? Value
      : Value["toString"] extends Function
        ? TrimEnd<ReturnType<Value["toString"]>>
        : `${Value}`
;


/**
  * @description
  * Removes the leading white space and line terminator characters from a string.
  *
  * @see {@link String.prototype.trimEnd} native
  * @see {@link https://tc39.es/ecma262/#sec-string.prototype.trimend} ecma262
  * @see {@link trim} similar
  * @see {@link trimStart} similar
  * @see {@link prototype} dependency
  *
  * @example
  * ```
  * trimEnd('  hello  '); //=> '  hello'
  * ```
  */
export default function trimEnd<Value extends string>(value: Value): TrimEnd<Value>;
