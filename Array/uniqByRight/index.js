export default (call) => (values) => {
  var length = values.length;
  switch (length) {
    case 0  : case 1: return values;
    case 2  : return call(values[0]) === call(values[1]) ? [values[0]] : values;
    default : {
      var key;
      return Array.from(values.reduceRight((create, value, index, values) => create.has(key = call(value, index, values))
        ? (create)
        : (create.set(key, value)), new Map).values());
    }
  };
};
