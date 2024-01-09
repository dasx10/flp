export interface FunctionNamespace {
  public readonly union   : Promise<typeof import("./union")>;
  public readonly binary  : Promise<typeof import("./binary")>;
  public readonly ap      : Promise<typeof import("./ap")>;
  public readonly partial : Promise<typeof import("./partial")>;
  public readonly length  : Promise<typeof import("./length")>;
  public readonly by      : Promise<typeof import("./by")>;
}

declare const FunctionNamespace: FunctionNamespace;
export default FunctionNamespace;
