export default(y)=>function*(x){var i=x[Symbol.iterator](),o=i.next();while(!o.done&&y(o.value))o=i.next();i.next();yield*i}

