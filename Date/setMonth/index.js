export default (set) => (value) => (new Date(
  value.getFullYear(),
  set,
  value.getDate(),
  value.getHours(),
  value.getMinutes(),
  value.getSeconds(),
  value.getMilliseconds()
));
