var exec = (call) => (value, index, values) => !call(value, index, values)
export default (findIndex) => (call) => ((values) => findIndex(exec(call)))(values) < 0);
