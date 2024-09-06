var clump=(z)=>(y)=>(x)=>z>x?z:y<x?y:x;export default clump;export var then=(x)=>x(clump);
