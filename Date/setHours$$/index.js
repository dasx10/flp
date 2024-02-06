export default (value, set) => (new Date(
  value.getFullYear(),
  value.getMonth(),
  value.getDate(),
  set,
  value.getMinutes(),
  value.getSeconds(),
  value.getMilliseconds()
));
