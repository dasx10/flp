import type { nil } from "../../Logic/is/nil";
import type { notNullOrUndefined } from "../../Logic/ne/nil";
import type { notNil }  from "../../Logic/notNil";
import type { Nothing } from "../Nothing";

type Just<Value> = <Return>(call: (value: Value) => Return) => MaybeJust<Return>;

type MaybeJust<Value extends any = any> = Value extends nil
  ? Nothing
  : nil extends Value
    ? Just<Exclude<Value, nil>> | Nothing
    : Just<Exclude<Value, nil>>;

type Maybe<Accept extends any = any> = {
  (value: nil): Nothing,
  <Value extends notNil<Accept>>(value : Value): MaybeJust<Value>;
};

export default function maybe(value: nil): Nothing;
export default function maybe<Value>(value: notNullOrUndefined & Value): Just<Value>;
export default function maybe<Value extends notNil<Accept>>(value: notNullOrUndefined): MaybeJust<Value>;
