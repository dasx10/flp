type ArrayBit<Values extends readonly any[]> = Values extends readonly [infer First, ...infer Rest]
  ? [First] | [First, ...ArrayBit<Rest>]
  : Values extends readonly []
    ? []
    : Value[] | []
  ;

type ArrayBitFor<Values extends readonly any[], Length extends number, ByDefault extends readonly Values[number][] = Values> = Length extends Values["length"]
  ? Values
  : Values extends readonly [...infer Rest, any]
    ? ArrayBitFor<Rest, Length, ByDefault>
    : ByDefault | []
;

export type ArrayLimit<Values extends readonly any[], Length extends number> = number extends Length
  ? [] | ArrayBit<Values>
  : ArrayBitFor<Values, Length>
;

/**
  * @description
  * @function
  * @name limit
  * @param {number} length
  */
export default function limit<Length extends number>(length: Length): <Values extends readonly any[]>(values: Values) => Values[number][];
