export default (value, next, join) => (value ? next ? (value.concat(join, next)) : value : next);
