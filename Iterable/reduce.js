var reduce=(exec)=>(initial)=>(iterbale)=>{
  var accumulator=initial;
  for(var value of iterbale)accumulator=exec(value)(accumulator);
  return accumulator
}
export default reduce;
