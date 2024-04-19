export default(y)=>function*(x){for(var value of x)yield y(value);};
