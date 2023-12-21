import type Lambda    from "../../types/Lambda";
import type Parameter from "../../types/Parameter";

export default function all <Return, Value>(call: IterateCall<Return, Value>): {
  (values: readonly []): null;
  (values: readonly [Value, ...Value[]]): Return;
  (values: readonly Value[]): Return | null;
}
