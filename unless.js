var unless=(o)=>(y)=>(x)=>o(x)?x:y(x);export default unless;export var then=(x)=>x(unless);
