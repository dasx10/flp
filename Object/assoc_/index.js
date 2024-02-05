export default (value) => (key) => (entries) => ({ ...entries, [key]: value });
