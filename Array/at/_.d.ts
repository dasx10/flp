import type ArrayAt from "../../types/Array/At";
export default function at_<Values extends readonly any[]>(values: Values): <Index extends number>(index: Index) => ArrayAt<Values, Index>;
