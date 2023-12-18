import { nullOrUndefined } from "../isNil";

export default function whenIsNil<Return, Value>(call: (value: Value) => Return): {
  (value: Value | nullOrUndefined): Return | nullOrUndefined;
};
