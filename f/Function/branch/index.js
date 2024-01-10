export default ((call) => ((next) => ((is) => ((value) => (is(next(value))(call(value)))))));
