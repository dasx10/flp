import type Index from "../../types/Index";
declare var include: <_index extends Index>(index: Index) => <Value>(value: Value) => <Values extends readonly any[]>(values: Values) => (Values[number] | Value)[];
export default include;
