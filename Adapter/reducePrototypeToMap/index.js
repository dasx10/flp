export default (reduce) => (call) => (values) => reduce.call(values, (create, value, index, values) => (create[index] = call(value, index, values), create), Array(values.length));
