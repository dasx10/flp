var pow=Math.pow;
var root=(y)=>(x)=>x<0?pow(-x,1/y)*(y&1?-1:1):pow(x,1/y);
export default root;
export var then=(resolve)=>resolve(root);
