export default (call) => (values) => values.map(call).reduce((max, value, index, values) => value < values[max] ? max : index, -1);
