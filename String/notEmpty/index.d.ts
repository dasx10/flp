declare var notEmpty: {
  (value: ""): false;
  <Value extends string>(value: Value): string extends Value
    ? boolean
    : "" extends Value
      ? boolean
      : true;
}

export default notEmpty;
