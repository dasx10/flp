import type ArrayFind from "../Types/ArrayFind";
import type ArrayFound from "../Types/ArrayFound";

export default function find_<Values extends readonly any[]>(values: Values): {
  (call: (value: Values[number]) => any): ArrayFound<Values>;
  <Predicate>(call: (value: Values[number]) => value is Predicate): ArrayFind<Values, Predicate>;
}
