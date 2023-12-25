export default (values) => Array.from(values.reduce((create, value) =>  (create.has(value) && create.delete(value), create.add(value)), new Set).values());
