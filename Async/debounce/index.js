export default (next) => {
  var key, is = false;
  return (call) => is
    ? (clearTimeout(key), key = setTimeout((call) => (call(), is = false), next, call))
    : (call(), is = true, key);
};
