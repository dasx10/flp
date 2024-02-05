export default (key) => (value) => (entries) => ({ ...entries, [key]: value });
