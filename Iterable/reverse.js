export default function*reverse(x){var i=x[Symbol.iterator](),y=i.next();if(y.done)return;yield*reverse(i);yield y.value;}
