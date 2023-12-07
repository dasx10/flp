import type { AdapterNamespace } from "./Adapter";
import type { ArrayNamespace } from "./Array";
import type { AsyncNamespace } from "./Async";
import type { LogicNamespace } from "./Logic";
import type { NumberNamespace } from "./Number";

export interface Namespace {
  public readonly Adapter : AdapterNamespace,
  public readonly Array   : ArrayNamespace,
  public readonly Number  : NumberNamespace,
  public readonly Logic   : LogicNamespace,
  public readonly Async   : AsyncNamespace,
}

declare const namespace: Namespace;
export default namespace;
