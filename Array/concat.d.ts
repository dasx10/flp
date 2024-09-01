export function concat<Y>(y: Y): Y extends readonly any[]
  ? <X extends readonly any[]>(x: X) => readonly [...X, ...Y]
  : <X extends readonly any[]>(x: X) => readonly [...X, Y]
;
