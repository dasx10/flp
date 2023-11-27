import type { notNullOrUndefined } from "../notNil";

export type nullOrUndefined = null | undefined;
export type nil <Value extends unknown = nullOrUndefined> = Extract<Value, nullOrUndefined>;
export type IsNil<Value> = Value extends nil ? true : false;

declare var isNil: {
  (value: nullOrUndefined): true;
  (value: notNullOrUndefined): false;
  <Value extends unknown>(value: Value): value is nil<Value>;
  <Value extends any>(value: Value): IsNil<Value>;
};

export default isNil;
