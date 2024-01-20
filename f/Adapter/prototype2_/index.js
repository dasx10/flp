export default (prototyupe) => (next) => (value) => (is) => prototyupe.call(is, value, next);
