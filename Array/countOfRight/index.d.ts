import type Index from "../types";
import type IterateCall from "../types/IterateCall";

export default function countOfRight(length: 0)
   : <Value>(call: IterateCall<any, Value>)
  => <Values extends readonly Value[]>(values: Values) => Index<Values>;

export default function countOfRight<Length extends number>(length: Length)
   : <Value>(call: IterateCall<any, Value>)
  => (values: readonly Value[]) => number;
