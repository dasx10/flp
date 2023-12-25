export default ((reduce) => ((call) => {
  switch (call.length) {
    case 0: case 1: return ((values) => {
      switch (values.length) {
        case 0  : case 1: return (values);
        case 2  : return ((call(values[0]) === call(values[1])) ? ([values[0]]) : (values));
        default : return (Array.from(
          reduce
          ((create) => (value) => {
            var key = call(value);
            return create.has(key) ? (create) : (create.set(key, value));
          })
          (new Map)
          (values).values()
        ));
      };
    });
    default: return ((values) => {
      switch (values.length) {
        case 0  : case 1: return (values);
        case 2  : return ((call(values[0], 0, values) === call(values[1], 1, values)) ? ([values[0]]) : (values));
        default : return (Array.from(
          reduce
          ((create) => (value, index, values) => {
            var key = call(value, index, values);
            return create.has(key) ? (create) : (create.set(key, value));
          })
          (new Map)
          (values).values()
        ));
      };
    });
  };
}));
