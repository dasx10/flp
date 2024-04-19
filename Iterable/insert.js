export default(y)=>(o)=>function*(x){var i=x[Symbol.iterator](),z;while(z=i.next()){if(z.done){yield o;return}if(y(z.value)){yield o;yield*i;return;}yield z.value}}
