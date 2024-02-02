export default (call, length) => Object.defineProperty(call, "length", {
  configurable : true,
  enumerable   : false,
  writable     : false,
  value        : length,
});
