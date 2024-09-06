export default function*reverse(x){yield*Array.from(x).reverse()};export var then=(resolve)=>resolve(reverse);
