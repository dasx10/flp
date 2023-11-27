type FromHead<Values extends readonly any[]> =
  Values extends readonly [infer Head, ...infer Tail]
    ? Tail extends readonly [infer Next, ...infer Rest]
      ? [Head, ...FromHead<Tail>]
      : [Head] | []
    : Values extends readonly [...infer Type]
      ? Type | []
      : [];

declare var init: <Values extends readonly any[]>(values: Values) => Values extends readonly [...infer Init, any]
  ? Init
  : Values extends readonly []
    ? []
    : FromHead<Values>;

export default init;
