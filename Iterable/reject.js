export default(y)=>function*(x){for(var o of x){if(y(o))continue;yield o}}
