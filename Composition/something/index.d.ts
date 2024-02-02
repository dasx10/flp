import type Lambda    from "../../types/Lambda";
import type Parameter from "../../types/Parameter";
export default function something<Is, Value>(values: readonly ((value: Value) => value is Is)[]): (value: Value) => value is Is;
export default function something<Value>(values: readonly Lambda<any, Value>[]): (value: Value) => boolean;
// export default function something<Values extends readonly Lambda[]>(values: Values): (value: Parameter<Values[number]>) => boolean;
