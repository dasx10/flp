var all = call => (values, is) => (values.every((value) => is = call(value)), is);
export default all;
