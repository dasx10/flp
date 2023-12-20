export default (findIndex) => (call) => (values) => findIndex(call)(values) > -1;
