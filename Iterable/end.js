export default(y)=>function*(x){var o;for (o of x){if(y(o))return o;yield o}}
