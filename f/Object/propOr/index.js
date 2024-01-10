export default (next) => (key) => (value) => ((value && value[key]) || next);
