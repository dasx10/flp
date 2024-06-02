var resolved=(then)=>(then.then = then);
var right=(x)=>(x&&x.then&&x.then===x)?x:resolved((y,e)=>right(x.then?x.then(y,e):y(x)));
export default right;
