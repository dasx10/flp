import uInt from "../Math/uInt.js";

var mustBeUInt = (value) => {
  if (uInt(value) !== value) throw new TypeError(String(value) + " is not an integer");
  return value;
};

export default mustBeUInt;
