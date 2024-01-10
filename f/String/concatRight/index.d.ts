declare var concatRight
   : <
      Next  extends string,
     _Value extends string = string,
   >(next: Next)
  => <Value extends _Value>(value: Value) => `${Next}${Value}`;

export default concatRight;
