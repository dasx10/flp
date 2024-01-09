var filter = (values, value, map) => values.length
  ? map.set(value, values.filter(call(value))).get(value)
  : values;

var search = (call) => (values) => {
  var map = new Map();

  var get = (value) => {
    var length = value.length;
    if (length > 1) {

      var indexOf     = value.substr(0, length - 1);
      var lastIndexOf = value.substr(-1);

      return (
        (map.get(indexOf)) ||
        (map.get(lastIndexOf)) ||
        (get(indexOf)) ||
        (get(lastIndexOf))
      );
    }
  }

  return (value) => ((map.get(value)) || (filter((get(value)) || values, value, map)));
};
