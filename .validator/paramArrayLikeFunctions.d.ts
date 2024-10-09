type ParamArrayLikeFunctions<Call extends (values: ArrayLike<any>) => any> = Call extends (values: infer Values) => infer Return
  ? Values extends ArrayLike<Function>
    ? Call
    : (values: ArrayLike<Function>) => Return
  : (values: ArrayLike<Function>) => unknown
;

export default function paramArray<Call>(call: ParamArrayLikeFunctions<Call>): Call;
