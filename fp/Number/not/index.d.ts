declare const not: {
  (value: 0): true;
  <Value extends number>(value: Value) : number extends Value
    ? boolean
    : `${Value}` extends `${infer Is}`
      ? Is extends "0"
        ? true
        : false
      : false
    ;

  (value: number): value is number;
}

export default not;
