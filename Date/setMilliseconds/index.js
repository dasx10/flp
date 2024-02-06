export default (set) => (value) => (new Date(
  value.getFullYear(),
  value.getMonth(),
  value.getDate(),
  value.getHours(),
  value.getMinutes(),
  value.getSeconds(),
  set
));
