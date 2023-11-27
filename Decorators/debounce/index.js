var debounce = call => (value, create) => is => (
  clearTimeout(create),
  create = setTimeout(call, value, is)
);

export default debounce;
