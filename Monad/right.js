var o=(x)=>(x.then=x);
var resolve=(x)=>o((y,e)=>resolve(x.then(y,e)));
var right=(x)=>(x&&x.then)?(x.then===x)?x:resolve(x):o((y)=>right(y(x)));
export default right;
