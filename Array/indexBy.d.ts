import type ArrayIndex from "../../Types/ArrayIndex";
import type Conveyer from "../../Types/Conveyer";
export default function indexBy<Value>(call: Conveyer<any, Value, Value>): <Values extends readonly Value[]>(values: Values) => ArrayIndex<Values>;
