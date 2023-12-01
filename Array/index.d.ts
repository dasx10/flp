import type { Promises } from ".."
import {AsyncReduce} from "./reduce"

interface _ArrayNamespace {
  /**
    * @see {@link Array.reduce}
    */
  reduce: AsyncReduce,
  map: typeof import("./map").default
  find: typeof import("./find").default
  count: typeof import("./count").default
  empty: typeof import("./empty").default
  concat: typeof import("./concat").default
}

declare const ArrayNamespace: Promises<_ArrayNamespace>;
export default ArrayNamespace;
