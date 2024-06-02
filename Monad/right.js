var o=(x)=>(x.then=x),right=(x)=>(x&&x.then&&x.then===x)?x:o((y,e)=>right(x.then?x.then(y,e):y(x)));export default right;
