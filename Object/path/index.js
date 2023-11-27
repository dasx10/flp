export default (keys) => (
  keys = keys.reduce((value, key) => value + "['" + key + "']", "return" + " " + "value"),
  new Function("value", keys)
);
