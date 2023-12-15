export default (call) => ((values) => (values.findLastIndex((value, index, values) => (!call(value, index, values))) < 0));
