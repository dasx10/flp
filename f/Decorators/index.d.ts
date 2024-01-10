export interface DecoratorsNamespace {
  public readonly on           : Promise<typeof import("./on").default>;
  public readonly o            : Promise<typeof import("./o").default>;
  public readonly memoCreated  : Promise<typeof import("./memoCreate").default>;
  public readonly memoByCreate : Promise<typeof import("./memoByCreate").default>;
  public readonly memo         : Promise<typeof import("./memo").default>;
  public readonly memoBy       : Promise<typeof import("./memoBy").default>;
  public readonly memoWeak     : Promise<typeof import("./memoWeak").default>;
  public readonly memoWeakBy   : Promise<typeof import("./memoWeakBy").default>;
  public readonly tap          : Promise<typeof import("./tap").default>;
  public readonly trap         : Promise<typeof import("./trap").default>;
  public readonly trapBy       : Promise<typeof import("./trapBy").default>;
  public readonly trapWith     : Promise<typeof import("./trapWith").default>;
  public readonly less         : Promise<typeof import("./less").default>;
  public readonly lessBy       : Promise<typeof import("./lessBy").default>;
  public readonly lessWith     : Promise<typeof import("./lessWith").default>;
};

declare const Decorators: DecoratorsNamespace;
export default Decorators;
