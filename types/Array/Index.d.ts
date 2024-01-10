type _ArrayIndex<Values extends readonly any[]> = Values extends readonly [any, ...infer Next]
  ? Next['length'] | _ArrayIndex<Next>
  : 0
  ;

type ArrayIndex_ <Values extends readonly any[]> = Values extends readonly [...infer Head, any]
  ? Head['length'] | ArrayIndex_<Head>
  : 0
;

type ArrayIndex<Values extends readonly any[]> = number extends Values["length"]
  ? number
  : Values extends readonly [any, ...infer Tail]
    ? Tail['length'] | _ArrayIndex<Tail>
    : Values extends readonly [...infer Head, any]
      ? Head['length'] | ArrayIndex_<Head>
      : Values extends readonly []
        ? 0
        : number
;

export default ArrayIndex;
