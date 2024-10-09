type ParamArray<Call extends (values: readonly any[]) => any > = Call extends (values: infer Values) => infer Return
  ? Values extends readonly any[]
    ? Call
    : (values: readonly unknown[]) => Return
  : (values: readonly unknown[]) => unknown
;

export default function paramArray<Call>(call: ParamArray<Call>): Call;
