export default (set) => (value) => (new Date(
  value.getFullYear(),
  value.getMonth(),
  value.getDate(),
  value.getHours(),
  set,
  value.getSeconds(),
  value.getMilliseconds()
));
