type ArrayLikeValue<Values extends ArrayLike<any>> = Values extends ArrayLike<infer Value>
  ? Value
  : never
;

export default ArrayLikeValue;
