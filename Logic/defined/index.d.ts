declare var defined: {
  (value: undefined): false;
  <Value>(value: Value): boolean;
}

export default defined;
