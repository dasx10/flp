import type IterateCall from "../types/IterateCall";
export default function allRight_(values: readonly []): (call?: any) => undefined;
export default function allRight_<Values extends readonly any[]>(values: Values): <Return>(call: IterateCall<Return, Values[number], Values>) => Return;
