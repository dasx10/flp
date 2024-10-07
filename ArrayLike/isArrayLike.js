var isArrayLike = (value) => "length" in Object(value) && (
  ((value.length  >  0) && ((value.length - 1) in value) && (0 in value)) ||
  ((value.length === 0) && (typeof(value) !== "function"))
);

export default isArrayLike;
export var then = (resolve) => resolve(isArrayLike);
