type ArrayMaybePrepend<Values extends readonly any[], Value> = Values | readonly [Value, ...Values];
export default ArrayMaybePrepend;
