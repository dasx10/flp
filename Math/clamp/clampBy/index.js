var clampBy = call => min => max => (value, is) => (is = call(value)) < call(min) ? min : is > call(max) ? max : value;
export default clampBy;
