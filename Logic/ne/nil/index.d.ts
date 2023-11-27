import type { nil } from "../../is/nil";
import type { nullOrUndefined } from "../isNil";

export type excludedNil = number | string | boolean | symbol | bigint | Record<PropertyKey, any> | Function;

export type NeNil <Value> = Value extends nil
  ? false
  : undefined extends Value
    ? boolean
    : null extends Value
      ? boolean
      : true
;

export default function neNil(value : nil): false;
export default function neNil(value : excludedNil): true;
export default function neNil<Value>(value: Value): value is Exclude<Value, nil>
