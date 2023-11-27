var uniqBy = call => values => {
  var length = values.length;
  switch (length) {
    case 0  : case 1: return values;
    case 2  : return call(values[0]) === call(values[1]) ? [values[0]] : values;
    default : {
      var value  = values[--length];
      var is     = new Set([call(value)]);
      var create = [value];
      while (0 < --length) {
        if (is.has(call(value = values[length]))) continue;
        is.add(value);
        create.push(value);
      }
      if (is.has(call(value = values[length]))) return create;
      create.push(value);
      return create;
    };
  };
};

export default uniqBy;
