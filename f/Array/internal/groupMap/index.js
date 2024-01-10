var groupBy = Map.groupBy;
export default groupBy
  ? ((values, call) => (groupBy((values), ((value, index) => (call(value, index, values))))))
  : ((values, call) => (values.reduce((create, value, index, values) => {
    var key = call(value, index, values);
    return (create.set(key, (create.get(key) || []).concat(value)));
  }, new Map)));
