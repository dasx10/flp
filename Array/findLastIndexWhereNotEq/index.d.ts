import type Index from "../types";
export default function findLastIndexWhereNotEq<Test extends Record<PropertyKey, any>>(test: Test): <Values extends readonly Record<PropertyKey, any>>(values: Values) => Index<Values>;
