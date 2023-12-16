export default (keys) => (value) => Object.fromEntries(Object.entries(value).filter((values) => !keys.includes(values[0])));
