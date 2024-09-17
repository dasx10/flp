var indexesOf=(y)=>(x)=>({[Symbol.iterator]:function*(){var i=0,k;for(k of x){if(y===k) yield i;++i;}}});export default indexesOf;export var then=(resolve)=>resolve(indexesOf);
