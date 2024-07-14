import type { _RightExec, Right, ToRight } from "./Monad/right"

import type MathNamespace from "./Math"
import type { Either, Left } from "./Monad/either";

interface Namespaces {
  readonly Math      : import("./Math").default;
  readonly Compose   : import("./Compose").default;
  readonly Array     : import("./Array").default;
  readonly String    : import("./String").default;
  readonly Date      : import("./Date").default;
  readonly Async     : import("./Async").default;
  readonly Record    : import("./Record").default;
  readonly Iterable  : import("./Iterable").default;
  readonly Generator : import("./Generator").default;
};

type Path<
  Namespace extends keyof Namespaces,
> = Namespace extends keyof Namespaces
  ? `${Namespace}/${keyof Namespaces[Namespace]}`
  : `${keyof Namespaces}/${string}`
;

type Load = <
  Namespace extends keyof Namespaces,
  Module    extends string
>(path: Path<Namespace> & `${Namespace}/${Module}`) => Module extends keyof Namespaces[Namespace]
  ? Either<Namespaces[Namespace][Module], Error>
  : Left<Error>
;

interface _ {
  readonly <Value>(value : Value): Right<Value>;
  readonly lazy          : Load;
  readonly import        : Load;
};

declare const _: _;
export default _;
