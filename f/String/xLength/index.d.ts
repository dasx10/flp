import type Lambda from "../../types/Lambda";

declare var xLength: <
   Call  extends Lambda<number, any>,
  _Value extends string = string
>(call: Call) => <Value extends _Value>(value: Value) => ReturnType<Call>;

export default xLength;
