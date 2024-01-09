type _Index<Values extends readonly any[]> = Values extends readonly [any, ...infer Tail]
  ? Tail['length'] | Index<Tail>
  : 0
;

type Index_ <Values extends readonly any[]> = Values extends readonly [...infer Head, any]
  ? Head['length'] | Index_<Head>
  : 0
;

type Index<Values extends readonly any[]> = Values extends readonly [any, ...infer Tail]
  ? Tail['length'] | _Index<Tail>
  : Values extends readonly [...infer Head, any]
    ? Head['length'] | Index_<Head>
    : Values extends readonly []
      ? 0
      : number
;

export default Index;
