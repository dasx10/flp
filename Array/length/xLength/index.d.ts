import type Index from "../../types/Index";

declare var xLength: <
   Call   extends (value: Index) => any,
  _Values extends readonly any[] = readonly any[]
>(call: Call) => <
  Values extends _Values
>(values: Values) => ReturnType<Call>;

export default xLength;
