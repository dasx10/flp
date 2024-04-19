export default(o)=>(y)=>function*(x){var i=y;if(i<x){yield i;while((i+=o)<x)yield i;yield i;}return x;};
