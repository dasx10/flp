import type ArrayLikeIndex from "../types/ArrayLike/ArrayLikeIndex.d.ts";

export default function findIndex<Value>(call: (value: Value) => boolean): <Values extends ArrayLike<Value>>(values: Values) => ArrayLikeIndex<Values>;
