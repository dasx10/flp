declare const not: {
  (value : true)    : false;
  (value : false)   : true;
  (value : boolean) : value is false;
}

export default not;
