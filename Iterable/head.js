export default function*(x){var i=x[Symbol.iterator](),y=i.next();if(y.done)return y.value;var z=y;while(y=i.next()){if(y.done)return y.value;yield z.value;z=y;}};
