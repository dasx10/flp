import type Parameter   from "../../types/Parameter";
import type IterateCall from "../types/IterateCall";

export type Map<Values extends readonly any[], Value> = Values extends readonly [infer Head, ...infer Tail]
  ? [Value, ...Map<Tail, Value>]
  : Value[];

type MapExec<Return, Value> = <Values extends readonly Value[]>(values: Values) => Map<Values, Return>;

export default function map<Return, Value>(call: IterateCall<Return, Value>): MapExec<Return, Value>;
export default function map<Call extends IterateCall>(call: Call): MapExec<Parameter<Call>, ReturnType<Call>>;

interface PromiseMapExec<Values extends readonly any[], Return> extends Promise<Value[]> {
  call: <Value extends Values>(value: Value) => Promise<Map<Value, Return>>
}

export interface AsyncMap extends Promise<MapExec<any, any>> {
  call: <Return, Value>(call: IterateCall<Return, Value> | Promise<IterateCall<Return, Value>>) => PromiseMapExec<readonly Value[], Return>
}
