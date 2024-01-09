export default (value) => Object.fromEntries(Object.entries(value).sort((value, next) => value[0].localeCompare(next[0])));
