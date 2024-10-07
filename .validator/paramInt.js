var int = parseInt;

export default (value) => {
  if (int(value) === value) return value;
  throw new TypeError(value + " is not an integer");
}
