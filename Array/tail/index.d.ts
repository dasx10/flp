declare var tail: <Values extends readonly any[]>(values: Values) => Values extends readonly [any, ...Tail]
  ? Tail
  : Values extends readonly [] 
    ? []
    : Values[number][] | [];

export default tail;
