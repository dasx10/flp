export default (value, set) => (new Date(
  set,
  value.getMonth(),
  value.getDate(),
  value.getHours(),
  value.getMinutes(),
  value.getSeconds(),
  value.getMilliseconds()
));
