import type { RightFunction } from "../Monad/right";

type NthFunction = <Index extends number>(index: Index) => <Values extends readonly any[]>(values: Values) => ArrayValue<Values> | undefined;

declare const nth: NthFunction & {
  readonly toAsync: RightFunction<NthFunction>;
};

export default nth;
export const then: (resolve: (module: typeof nth) => any) => any;
