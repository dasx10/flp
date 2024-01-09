import type Lambda from "../../types/Lambda";
export default function findLastWhere<Test extends Record<PropertyKey, Lambda<any, any>>>(test: Test)
  :  <Values extends readonly Record<PropertyKey, any>[]>(values: Values)
  => Values | [] | Values[number][];
