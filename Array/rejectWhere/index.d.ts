import type Lambda from "../../types/Lambda";
export default function rejectWhere<Test extends Record<PropertyKey, Lambda<any, any>>>(test: Test): <Values extends readonly any[]>(values: Values) => Values | [] | Values[number][];
