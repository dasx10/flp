type RequiredLeft<Values extends readonly any[], Current extends readonly any[] = []> = Values extends readonly [infer Value, ...infer Next]
  ? RequiredLeft<Next, [...Current, Value]>
  : Current;

export default RequiredLeft;
