type ParamArrayLike<Call extends (values: ArrayLike<any>) => any> = Call extends (values: infer Values) => infer Return
  ? Values extends ArrayLike<any>
    ? Call
    : <Values extends ArrayLike<unknown>>(values: Values) => Return
  : <Values extends ArrayLike<unknown>>(values: Values) => unknown
;

export default function paramArray<Call extends (values: any) => any>(call: ParamArrayLike<Call>): Call;
