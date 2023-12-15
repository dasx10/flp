import type IterateCall from "../../types/IterateCall";
/**
  * @description
  * test must some like `some` or `findIndex` or `findIndexRight` executor
  */
export default function forEachWhileExec<Value>(test: IterateCall<any, Value>, call: IterateCall<any, Value>): IterateCall<boolean, Value>;
