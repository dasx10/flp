declare const or: {
  (next: true)    : (value: boolean) => true;

  (next: false)   : (value: true)    => true;
  (next: false)   : (value: false)   => false;

  (next: boolean) : (value: true)    => true;
  (next: boolean) : (value: false)   => next is true;

  (next: false)   : (value: boolean) => value is true;

  (next: boolean) : (value: boolean) => boolean;
}

export default or;
