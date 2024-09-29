var nth = (index) => (values)=> values.length > index ? values[index] : void 0;
export default nth;
export var then = (resolve) => resolve(nth);
