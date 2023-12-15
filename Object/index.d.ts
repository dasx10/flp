export interface ObjectNamespace {
  public readonly where        : Promise<typeof import("./where").default>,
  public readonly whereEq      : Promise<typeof import("./whereEq").default>,
  public readonly whereIs      : Promise<typeof import("./whereIs").default>,
  public readonly whereNot     : Promise<typeof import("./whereNot").default>,
  public readonly whereNotEq   : Promise<typeof import("./whereNotEq").default>,
  public readonly whereNotIs   : Promise<typeof import("./whereNotIs").default>,
  public readonly map          : Promise<typeof import("./map").default>,
  public readonly onWhere      : Promise<typeof import("./onWhere").default>,
  public readonly onWhereEq    : Promise<typeof import("./onWhereEq").default>,
  public readonly onWhereIs    : Promise<typeof import("./onWhereIs").default>,
  public readonly onWhereNot   : Promise<typeof import("./onWhereNot").default>,
  public readonly onWhereNotEq : Promise<typeof import("./onWhereNotEq").default>,
  public readonly onWhereNotIs : Promise<typeof import("./onWhereNotIs").default>,
  public readonly onMapIs      : Promise<typeof import("./onMapIs").default>,
  public readonly onMapEq      : Promise<typeof import("./onMapEq").default>,
}

declare const ObjectNamespace: ObjectNamespace;
export default ObjectNamespace;
