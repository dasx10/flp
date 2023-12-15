import type Parameter   from "../../types/Parameter";
import type IterateCall from "../types/IterateCall";

export type Map<Values extends readonly any[], Value> = Values extends readonly [infer Head, ...infer Tail]
  ? [Value, ...Map<Tail, Value>]
  : Value[];

type MapExec<Return, Value> = <Values extends readonly Value[]>(values: Values) => Map<Values, Return>;

export default function map<Return, Value>(call: IterateCall<Return, Value>): MapExec<Return, Value>;
export default function map<Call extends IterateCall>(call: Call): MapExec<Parameter<Call>, ReturnType<Call>>;
