var isArray = Array.isArray;
export default (value) => isArray(value) ? value : [value];
