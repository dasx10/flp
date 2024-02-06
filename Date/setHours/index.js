export default (set) => (value) => (new Date(
  value.getFullYear(),
  value.getMonth(),
  value.getDate(),
  set,
  value.getMinutes(),
  value.getSeconds(),
  value.getMilliseconds()
));
