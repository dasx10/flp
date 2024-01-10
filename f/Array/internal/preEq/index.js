export default (values, next, call) => (values === next) || (values.length === next.length && call(values, next));
