import type ArrayFilter from "./ArrayFilter";
type ArrayFind<Values extends readonly any[], Is> = ArrayFilter<Values, Is>[number] | undefined;
export default ArrayFind;
