import type { Right, ToRight } from "./Monad/right"

import type Math from "./Math"

interface Namespaces {
  Math    : import("./Math").default;
  Compose : import("./Compose").default;
  // Array   : import("./Array").default;
  // Async   : import("./Async").default;
  // Record  : import("./Record").default;
}

type Path<
  Namespace extends keyof Namespaces,
> = Namespace extends keyof Namespaces
  ? `${Namespace}/${keyof Namespaces[Namespace]}`
  : `${keyof Namespaces}/${string}`
;

type Load = <
  Namespace extends keyof Namespaces,
  Module,
>(path: Path<Namespace> & `${Namespace}/${Module}`) => Right<Namespaces[Namespace][Module]>;

declare const _: {
  <Value>(value : Value): Right<Value>;
  lazy          : Load;
  import        : Load;
}

export default _;
