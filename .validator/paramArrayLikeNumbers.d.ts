type ParamArrayLikeNumbers<Call extends (values: ArrayLike<any>) => any> = Call extends (values: infer Values) => infer Return
  ? Values extends ArrayLike<number>
    ? Call
    : (values: ArrayLike<number>) => Return
  : (values: ArrayLike<number>) => unknown
;

export default function paramArray<Call>(call: ParamArrayLikeNumbers<Call>): Call;
