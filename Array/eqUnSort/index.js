import eq from "../../Object/internal/eq/index.js";

export default (next) => (values) => {
  if (values === next) return true;
  if (values.length !== next.length) return false;
  var keys = new Set();
  return (values.every((value) => next.some((is, index) => eq(value, is) && (keys.has(index) ? false : (keys.add(index), true)))));
};
