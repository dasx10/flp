import type Lambda from "../../types/Lambda";
export default function filterWhere<Test extends Record<PropertyKey, Lambda<any, any>>>(test: Test): <Values extends readonly Record<PropertyKey, any>[]>(values: Values) => Values | Values[number][] | [];
