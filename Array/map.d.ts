import type ArrayFillAll from "../Types/ArrayFillAll";
import type Lambda from "../Types/Lambda";
export default function map<Return, Value>(call: Lambda<Return, Value>): <Values extends readonly Value[]>(values: Values) => ArrayFillAll<Values, Return>;
