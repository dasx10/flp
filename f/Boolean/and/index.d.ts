declare const and: {
  (next: true): {
    (value : true): true;
    (value : false): false;
    (value : boolean): value is true;
  }
  (next: false): (value: boolean) => boolean;
}

export default and;
