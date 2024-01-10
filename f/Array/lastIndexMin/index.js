export default (values) => values.reduce((min, value, index, values) => value > values[min] ? min : index, -1);
