import type { AdapterNamespace }    from "./Adapter";
import type { ArrayNamespace }      from "./Array";
import type { AsyncNamespace }      from "./Async";
import type { DecoratorsNamespace } from "./Decorators";
import type { LogicNamespace }      from "./Logic";
import type { NumberNamespace }     from "./Number";
import type { ObjectNamespace }     from "./Object";

export interface Namespace {
  public readonly Adapter    : AdapterNamespace,
  public readonly Array      : ArrayNamespace,
  public readonly Decorators : DecoratorsNamespace,
  public readonly Object     : ObjectNamespace,
  public readonly Number     : NumberNamespace,
  public readonly Logic      : LogicNamespace,
  public readonly Async      : AsyncNamespace,
}

declare const namespace: Namespace;
export default namespace;
