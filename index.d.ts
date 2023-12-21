import type { AdapterNamespace }    from "./Adapter";
import type { ArrayNamespace }      from "./Array";
import type { AsyncNamespace }      from "./Async";
import type { DecoratorsNamespace } from "./Decorators";
import type { FunctionNamespace }   from "./Function";
import type { LogicNamespace }      from "./Logic";
import type { NumberNamespace }     from "./Number";
import type { ObjectNamespace }     from "./Object";

export interface y {
  public readonly Adapter    : AdapterNamespace,
  public readonly Array      : ArrayNamespace,
  public readonly Decorators : DecoratorsNamespace,
  public readonly Function   : FunctionNamespace,
  public readonly Object     : ObjectNamespace,
  public readonly Number     : NumberNamespace,
  public readonly Logic      : LogicNamespace,
  public readonly Async      : AsyncNamespace,
}

declare const y: y;
export default y;
