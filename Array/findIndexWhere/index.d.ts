import type Lambda from "../../types/Lambda";
import type Index from "../types";
export default function findIndexWhere<Test extends Record<PropertyKey, Lambda<any, any>>>(test: Test): <Values extends readonly Record<PropertyKey, any>>(values: Values) => Index<Values>;
