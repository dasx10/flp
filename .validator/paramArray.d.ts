type ParamArray<Call extends (values: readonly *[]) =>*> = Call extends (values: infer Values) => infer Return
  ? Values extends readonly *[]
    ? Call
    : (values: readonly unknown[]) => Return
  : (values: readonly unknown[]) => unknown
;

export default function paramArray<Call extends (values: readonly *[]) => *>(call: ParamArray<Call>): Call;
