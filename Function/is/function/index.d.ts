declare var isFunction: {
  (value: (...value: any[]) => any): true;
  (value: unknown): value is (...values: unknown[]) => unknown;
}

export default isFunction;
