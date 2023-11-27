var any = call => (values, is) => (values.some((value) => is = call(value)), is);
export default any;
