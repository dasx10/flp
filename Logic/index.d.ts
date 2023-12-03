export interface LogicNamespace {
  public readonly always : Promise<typeof import("./always").default>
  public readonly both   : Promise<typeof import("./both").default>
  public readonly also   : Promise<typeof import("./also").default>
  public readonly either : Promise<typeof import("./either").default>
  public readonly other  : Promise<typeof import("./other").default>
}

const LogicNamespace: LogicNamespace;
export default LogicNamespace;

