export default(y)=>function*(x){var i=x[Symbol.iterator](),o=i.next();while(!(y(o.value)||o.done))o=i.next();if(!o.done)yield o.value;yield*i}
