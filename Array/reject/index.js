export default (call) => (values) => (values.reduce((create, value, index, values) => call(value, index, values) ? (create) : (create.concat([value])),([])));
