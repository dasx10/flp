import type { nullOrUndefined } from "../isNil";
export default function whenNeNil<Value, Return>(call: (value: Value) => Return): <Next extends Value | nullOrUndefined>(value: Next) => Exclude<Next, nullOrUndefined> | Return;
