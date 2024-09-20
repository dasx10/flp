var avgs=(values)=>values.length?values.reduce((o,y)=>o+y)/values.length:NaN;
export default avgs;
export var then=(resolve)=>resolve(avgs);
