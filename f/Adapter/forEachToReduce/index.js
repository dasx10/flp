export default (forEach) => (call) => (value) => (values, is) => (
  (is = value),
  (forEach((value, key, values) => is = call(is)(value, key, values)))(values),
  (is)
);
