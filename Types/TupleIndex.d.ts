type TupleIndex_<Values extends readonly any[]> = Values extends readonly [any, ...infer Tail]
  ? Tail['length'] | TupleIndex_<Tail>
  : 0
;

type _TupleIndex <Values extends readonly any[]> = Values extends readonly [...infer Head, any]
  ? Head['length'] | _TupleIndex<Head>
  : 0
;

type TupleIndex<Values extends readonly any[]> = Values extends readonly [any, ...infer Tail]
 ? Tail["length"] | TupleIndex_<Tail>
 : _TupleIndex<Values>
;

export default TupleIndex;
