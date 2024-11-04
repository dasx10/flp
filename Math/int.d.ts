import type { RightFunction } from "../Monad/either";
import type { RightExecuteble } from "../Monad/right";

type IntFunction = {
  (value: any): number;
  readonly resolve: RightExecuteble<number, any>;
}

declare const int: IntFunction;

export default int;
export const then: (resolve: (module: typeof int) => any) => any;
