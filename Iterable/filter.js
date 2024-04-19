export default(y)=>function*(x){var i;for (var i of x)if(y(i))yield i}
