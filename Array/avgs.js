var avgs=(x)=>x.length?x.reduce((o,y)=>o+y)/x.length:NaN;export default avgs;export var then=(x)=>x(avgs);
