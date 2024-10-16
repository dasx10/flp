type ArrayTailChankRight<Values extends readonly any[]> = Values extends readonly [...infer Head, infer Last]
  ? readonly [Last] | readonly [...ArrayTailChankRight<Head>, Last]
  : Values extends readonly []
    ? readonly []
    : Values extends readonly (infer Value)[]
      ? readonly Value[]
      : never
;


type ArrayTailChank<Values extends readonly any[]> = Values extends readonly [any, ...infer Tail]
  ? Values | ArrayTailChank<Tail>
  : Values extends readonly []
    ? readonly []
    : Values extends readonly (infer Value)[]
      ? readonly Value[]
      : never
;

export default ArrayTailChank;
