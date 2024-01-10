export default (findIndex) => (call) => ((values) => values[findIndex(call)(values)]);
