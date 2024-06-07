var o=(x)=>(x.then=x),i=(x)=>o((y,e)=>i(x.then(y,e))),right=(x)=>(x&&x.then)?(x.then===x)?x:i(x):o((y)=>right(y(x)));export default right;
