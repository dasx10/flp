import type Lambda from "../../types/Lambda";
export default function rejectWhereNot<Test extends Record<PropertyKey, Lambda<any, any>>>(test: Test): <Values extends readonly any[]>(values: Values) => Values | [] | Values[number][];
