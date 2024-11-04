import isNumbers from "../Array/isNumbers.js";

export default (call) => (values) => {
  if (isNumbers(values)) return call(values);
  throw new TypeError(String(values) + " is not an array numbers");
};
