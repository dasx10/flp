export default ((pa, reduce) => ((value, values) => reduce.call(values, pa, value)));
