declare var limit: <
  Index   extends number,
  _Values extends readonly any[] = readonly any [],
>(index: Index) => <Values extends _Values>(values: Values) => Values[number][];

export default limit;
