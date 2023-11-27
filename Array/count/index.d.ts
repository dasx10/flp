declare var count : <
   Test   extends (value: any) => any,
  _Values extends readonly any[] = readonly Parameters<Test>[0][],
>(test: Test)
  => <Values extends _Values>(values: Values)
  => number;

export default count;
