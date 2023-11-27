var io = (call, test, value) => (
  (test = test || ((next) => (value === (next = call()) ? (true) : ((value = next), false)))),
  ((next, exec, is) => (
    (value = value || call()),
    (exec = () => (test() ? (is || next(value)) : (is = next(value))),
    io(exec, test, is || exec())
  )))
);

export default io;
