type Copy<Values extends ArrayLike<any>> = Values extends readonly any[]
  ? Values
  : Values extends ArrayLike<infer Value>
    ? readonly Value[] | readonly []
    : never
;

export default function copy<Values extends ArrayLike<Value>>(values: Values): Values;
