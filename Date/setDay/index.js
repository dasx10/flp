export default (set) => (value) => (new Date(
  value.getFullYear(),
  value.getMonth(),
  set,
  value.getHours(),
  value.getMinutes(),
  value.getSeconds(),
  value.getMilliseconds()
));
