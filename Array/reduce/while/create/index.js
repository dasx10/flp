export default some => test => call => value => values => {
  var next = value;
  return (some(is => test(is) || (next = call(next)(is), false)(values)), next);
}
