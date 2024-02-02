import type ArrayIndex from "../../../types/Array/Index";
export default function nth<Values extends readonly any[], Key extends number>(values: Values, key: Key | ArrayIndex<Values>): Values[Key];
