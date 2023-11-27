declare var concat
   : <
      Next  extends string,
     _Value extends string = string,
   >(next: Next)
  => <Value extends _Value>(value: Value) => `${Value}${Next}`

export default concat;
