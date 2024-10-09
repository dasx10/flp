type ParamArrayLike<Call extends (values: ArrayLike<any>) => any> = Call extends (values: infer Values) => infer Return
  ? Values extends ArrayLike<any>
    ? Call
    : (values: ArrayLike<unknown>) => Return
  : (values: ArrayLike<unknown>) => unknown
;

export default function paramArray<Call>(call: ParamArrayLike<Call>): Call;
