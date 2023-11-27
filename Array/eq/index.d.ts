declare var eq: <
   Next   extends readonly any[],
  _Values extends readonly any[] = readonly Next[number][]
>(next: Next) => <
  Values extends _Values,
>(values: Values) => boolean;

export default eq;
