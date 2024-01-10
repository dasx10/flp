import type Lambda from "../../types/Lambda";
export default function bind<Return, Values extends readonly any[], Context>(this: (...values: Values) => Return, thisArg: Context): (...values: Values) => Return;
