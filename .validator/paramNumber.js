var paramNumber = (call) => (value) => {
  if (typeof value !== "number") throw new TypeError(value + " is not a number");
  return call(value);
}

export default paramNumber;
