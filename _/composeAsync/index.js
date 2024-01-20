export default ((pa, reduce) => ((value, values) => Promise.resolve(values).then((values) => reduce.call(values, pa, value))));
