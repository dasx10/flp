import type { ArrayRemoveRight } from "../internal/removeRight";
export default function removeRight<Index extends number>(index: Index): <Values extends readonly any[]>(values: Values) => ArrayRemoveRight<Values, Index>;
