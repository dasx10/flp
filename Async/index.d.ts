export interface AsyncNamespace {
  public readonly pause      : Promise<typeof import("./pause").default>;
  public readonly delayRetry : Promise<typeof import("./delayRetry").default>;
}

declare const AsyncNamespace: AsyncNamespace;
export default AsyncNamespace;
