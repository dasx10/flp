export default (value) => Promise.all(Object.values(value)).then((values) => Object.fromEntries(Object.keys(value).map((key, index) => [key, values[index]])));
