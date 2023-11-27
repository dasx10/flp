type RequiredRight<Values extends readonly any[], Current extends readonly any[] = []> = Values extends readonly [...infer Next, infer Value]
  ? RequiredRight<Next, [Value, ...Current]>
  : Current;

export default RequiredRight;
