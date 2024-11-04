var prepend=(y)=>(x)=>[y,...x];
export default prepend;
export var then=(resolve)=>resolve(prepend);
