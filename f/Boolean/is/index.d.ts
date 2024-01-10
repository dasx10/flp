declare const is: {
  (next: false): {
    (value : false)   : true;
    (value : true)    : false;
    (value : boolean) : boolean;
  }

  (next: true) : {
    (value : true)    : true;
    (value : false)   : false;
    (value : boolean) : boolean;
  }

  (next: boolean) : (value : boolean) => boolean;
}

export default is;
