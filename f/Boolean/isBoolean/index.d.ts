declare const isBoolean: {
  (value: boolean): true;
  <Value>(value: Value): boolean extends Value ? true : boolean;
  (value: unknown): value is boolean;
}

export default isBoolean;
