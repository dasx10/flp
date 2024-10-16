type ArrayMaybeAppend<Values extends readonly any[], Value> = (readonly [...Values, Value]) | Values;
export default ArrayMaybeAppend;
