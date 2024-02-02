import type { ArrayRemove } from "../internal/remove";
export default function remove<Index extends number>(index : Index) : <Values extends readonly any[]>(values: Values) => ArrayRemove<Values, Index>;
