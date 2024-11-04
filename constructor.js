var constructor = (value) => (value && value.constructor && typeof value.constructor === "function")
  ? value.constructor
  : null
;

export default constructor;
