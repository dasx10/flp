declare var findRight: <
   Call   extends (value: any) => any,
  _Values extends readonly any[] = readonly Parameters<Call>[0][]
>(value: Call) => <Values extends _Values>(values: Values) => Values[number] | void;

export default findRight;
