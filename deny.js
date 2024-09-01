var deny=(y)=>(x)=>!y(x);export default deny;export var then=(x)=>x(deny);
