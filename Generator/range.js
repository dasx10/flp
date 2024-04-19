export default(y)=>function*(x){var i=y;if(i<x){yield i;while((i+=1)<x)yield i;yield i}return x};
