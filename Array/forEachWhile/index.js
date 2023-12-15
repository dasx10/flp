export default (test) => (call) => (values) => (values.some((value, index, values) => test(value, index, values) ? (call(value, index, values), false) : true), values);
