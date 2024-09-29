var isEmpty = (values) => values.length === 0;
export default isEmpty;
export var then = (resolve) => resolve(isEmpty);
