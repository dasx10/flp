import type ArrayIndex   from "../Types/ArrayIndex";
import type ArrayIndexOf from "../Types/ArrayIndexOf";

export default function findIndex_<Values extends readonly any[]>(values: Values): {
  (call: (value: Values[number]) => any): ArrayIndex<Values>;
  <Predicate>(call: (value: Values[number]) => value is Predicate): ArrayIndexOf<Values, Predicate>;
}
