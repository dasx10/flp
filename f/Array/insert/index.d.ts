declare var insert: <
    Index  extends number,
   _Value  extends any = any,
  __Values extends readonly any[] = readonly any[],
>(index: Index) => <
   Value  extends  _Value,
  _Values extends __Values
>(value: Value) => <
  Values extends _Values
>(values: Values) => (Values[number] | Value)[];

export default insert;
