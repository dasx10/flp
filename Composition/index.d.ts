import Namespace from "../types/Namespace";

export interface CompositionNamespace extends Namespace {
  public readonly pipe       : Promise<typeof import("./pipe").default>
  public readonly pipeAsync  : Promise<typeof import("./pipeAsync").default>
  public readonly compose    : Promise<typeof import("./compose").default>
  public readonly bank       : Promise<typeof import("./bank").default>
  public readonly anything   : Promise<typeof import("./anything").default>
  public readonly nothing    : Promise<typeof import("./nothing").default>
  public readonly everything : Promise<typeof import("./everything").default>
}

declare const composition: CompositionNamespace;
export default composition;
