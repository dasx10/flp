import type ArrayTailChank from "./TailChank";

type ArratLimitRight<
  Values extends readonly any[],
  Index  extends number,
  Origin extends readonly any[] = Values,
> = number extends Index
  ? ArrayTailChank<Values>
  : Index extends 0
    ? readonly []
    : number extends Values["length"]
      ? ArrayTailChank<Values>
      : Values["length"] extends Index
        ? Values
        : Values extends readonly [any, ...infer Tail]
          ? ArratLimitRight<Tail, Index, Origin>
          : Origin
;

export default ArratLimitRight;
