declare var head: <Values extends readonly any[]>(values: Values) => Values extends readonly [any, ...infer Head]
  ? Head
  : Values extends []
    ? []
    : (Values[number]|void)[] | [];

export default head;
