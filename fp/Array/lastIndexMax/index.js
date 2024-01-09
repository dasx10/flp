export default (values) => values.reduce((max, value, index, values) => value < values[max] ? max : index, -1);
