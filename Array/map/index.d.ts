import type Lambda from "../../types/Lambda";
import type Parameter   from "../../types/Parameter";
import type IterateCall from "../types/IterateCall";
import type { ArrayFillAll } from "../fillAll";

export default function map<Return, Value>(call: IterateCall<Return, Call>): <Values extends readonly Value[]>(values: Values) => ArrayFillAll<Values, Return>;
