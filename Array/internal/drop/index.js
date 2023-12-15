export default (values, min, max) => values.slice(0, min).concat(values.slice(max));
