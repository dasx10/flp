var clump=(z)=>(y)=>(z<y)
  ? (x)=>z>x?z:y<x?y:x
  : (x)=>y>x?y:z<x?z:x
;
export default clump;
export var then=(x)=>x(clump);
