import constructor from '../constructor.js'
var RegExp = constructor(/./) || (globalThis && globalThis.RegExp);
export default RegExp;
