var assoc=(k)=>(y)=>(x)=>({...x,[k]:y});export default assoc;export var then=(resolve)=>resolve(assoc);
