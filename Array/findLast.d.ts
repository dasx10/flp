import type ArrayFind  from "../../Types/ArrayFind";
import type ArrayFound from "../../Types/ArrayFound";
import type Lambda     from "../../Types/Lambda";
import type Predicate  from "../../Types/Predicate";

export default function findLast<Is, Value>(call: Predicate<Is, Value>): <Values extends readonly Value[]>(values: Values) => ArrayFind<Values, Is>;
export default function findLast<Value>(call: Lambda<any, Value>): <Values extends readonly Value[]>(values: Values) => ArrayFound<Values>;
