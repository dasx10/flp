import Lambda from "../../types/Lambda";

type Self<Values extends readonly any[], Call> = Values extends readonly [infer Value, ...infer Next]
  ? Self<Next, (value: Value) => Call>
  : Values extends readonly []
    ? Call extends (...values: readonly any[]) => any
      ? Call
      : (() => any) | Lambda<any, any>
    : (value: Values[number]) => any
;

type PartialReturnType<Values extends readonly any[], Call extends Lambda<any, any>> = Values extends readonly [any, ...infer Next]
  ? PartialReturnType<Next, ReturnType<Call>>
  : Values extends readonly []
    ? ReturnType<Call>
    : ReturnType<Call> | Call;

export default function pins<Values extends readonly any[]>(values: Values): <Call extends Self<Values>>(call: Call) => PartialReturnType<Values, Call>;
