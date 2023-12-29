export interface LogicNamespace {
  public readonly always          : Promise<typeof import("./always").default>;
  public readonly both            : Promise<typeof import("./both").default>;
  public readonly also            : Promise<typeof import("./also").default>;
  public readonly either          : Promise<typeof import("./either").default>;
  public readonly other           : Promise<typeof import("./other").default>;
  public readonly ne              : Promise<typeof import("./ne").default>;
  public readonly neNull          : Promise<typeof import("./neNull").default>;
  public readonly neNil           : Promise<typeof import("./neNil").default>;
  public readonly defined         : Promise<typeof import("./defined").default>;
  public readonly is              : Promise<typeof import("./is").default>;
  public readonly isCreate        : Promise<typeof import("./isCreate").default>;
  public readonly isNull          : Promise<typeof import("./isNull").default>;
  public readonly isUndefined     : Promise<typeof import("./isUndefined").default>;
  public readonly isNil           : Promise<typeof import("./isNil").default>;
  public readonly defined         : Promise<typeof import("./defined").default>;
  public readonly or              : Promise<typeof import("./or").default>;
  public readonly orBy            : Promise<typeof import("./orBy").default>;
  public readonly not             : Promise<typeof import("./not").default>;
  public readonly notCreate       : Promise<typeof import("./notCreate").default>;
  public readonly skip            : Promise<typeof import("./skip").default>;
  public readonly when            : Promise<typeof import("./when").default>;
  public readonly whenIsNil       : Promise<typeof import("./whenIsNil").default>;
  public readonly whenIsNull      : Promise<typeof import("./whenIsNull").default>;
  public readonly whenNeNil       : Promise<typeof import("./whenNeNil").default>;
  public readonly whenDefined     : Promise<typeof import("./whenDefined").default>;
  public readonly whenNeNull      : Promise<typeof import("./whenNeNull").default>;
  public readonly whenIsUndefined : Promise<typeof import("./whenIsUndefined").default>;

  public readonly onAlways        : Promise<typeof import("./onAlways").default>;
}

const LogicNamespace: LogicNamespace;
export default LogicNamespace;

