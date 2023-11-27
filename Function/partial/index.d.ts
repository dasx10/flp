import Lambda from "../../types/Lambda";

type Self<Values extends readonly any[], Call> = Values extends readonly [infer Value, ...infer Next]
  ? Self<Next, (value: Value) => Call>
  : Values extends readonly []
    ? Call extends (...values: readonly any[]) => any
      ? Call
      : (() => any) | Lambda<any, any>
    : (value: Values[number]) => any
;

declare var partial: <Values extends readonly any[]>(values: Values) => <Call extends Self<Values>>(call: Call) => ReturnType<Call>;
export default partial;
