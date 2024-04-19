import type ArrayIndex   from "../Types/ArrayIndex";
import type ArrayNth     from "../Types/ArrayNth";
import type ArgumentUInt from "../Types/ArgumentUInt";
import ArrayArgumentIndex from "../Types/ArrayArgumentIndex";

export default function nth_<Values extends readonly any[]>(values: Values): {
  <Index extends ArrayIndex<Values>>(index: ArrayArgumentIndex<Values, Index>): ArrayNth<Values, Index>;
  <Index extends number>(index: ArrayArgumentIndex<Values, Index>): ArrayNth<Values, Index>;
}
