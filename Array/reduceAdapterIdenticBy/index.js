export default (reduce) => (call) => {
  switch (call.length) {
    case 0:
    case 1: return (values) => {
      var length = values.length;
      switch (length) {
        case 0  : case 1: return values;
        case 2  : return call(values[0]) === call(values[1]) ? [values[0]] : values;
        default : {
          var key;
          return Array.from(
            reduce
            ((create, value) => create.has(key = call(value)) ? (create) : (create.set(key, value)))
            (new Map)
            (values).values()
          );
        }
      };
    }
    default: return (values) => {
      var length = values.length;
      switch (length) {
        case 0  : case 1: return values;
        case 2  : return call(values[0], 0, values) === call(values[1], 1, values) ? [values[0]] : values;
        default : {
          var key;
          return Array.from(
            reduce
            ((create, value, index, values) => create.has(key = call(value, index, values)) ? (create) : (create.set(key, value)))
            (new Map)
            (values).values()
          );
        }
      };
    };
  }
};
