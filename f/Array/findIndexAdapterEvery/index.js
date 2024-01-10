export default (findIndex) => (call) => ((values) => (findIndex((value, index, values) => !call(value, index, values)))(values) < 0);
