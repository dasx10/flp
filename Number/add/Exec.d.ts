import type { IdentityCall } from "../../Logic/identity";
import type NumberExclude from "../types/NumberExclude";

type AddExec<Next extends number> = Next extends 0
  ? IdentityCall<number>
  : {
    (value: 0): Next;
    <Value extends number>(value: Value): NumberExclude<number, NumberExclude<Value, 0> | NumberExclude<Next, 0>>
  }

export default AddExec;
