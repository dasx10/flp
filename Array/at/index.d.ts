import type ArrayAt from "../../types/Array/At";
export default function at<Index extends number>(index: Index): <Values extends readonly any[]>(values: Values) => ArrayAt<Values, Index>;
