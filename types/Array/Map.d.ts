import type ArrayFillAll from "./FillAll";
type ArrayMap<Values extends readonly any[], Call extends Function> = ArrayFillAll<Values, ReturnType<Call>>;
export default ArrayMap;
