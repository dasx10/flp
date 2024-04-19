import type ArrayIndex from "../Types/ArrayIndex";
import type ArrayNth   from "../Types/ArrayNth";

export default function at_<Values extends readonly any[]>(values: Values): {
  <Index extends ArrayIndex<Values>>(index: Index): ArrayNth<Values, Index>;
  (index: number): Values[number] | null;
};
