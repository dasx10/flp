export interface AdapterNamespace {
  public readonly prototype: Promise<typeof import("./prototype").default>
  public readonly method   : Promise<typeof import("./method").default>
  public readonly toArray  : Promise<typeof import("./toArray").default>
}

const AdapterNamespace: AdapterNamespace;
export default AdapterNamespace;
