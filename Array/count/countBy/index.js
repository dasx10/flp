var countBy = call => values => Object.fromEntries(Array.prototype.reduce.call(values, (create, value) => {
  var is = call(value);
  return create.set(is, (create.get(is) || 0) + 1);
}, new Map));

export default countBy;
