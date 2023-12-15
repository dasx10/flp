export default (values) => {
  var length = (values.length);
  switch (length) {
    case 0 : case 1: return (values);
    case 2 : return ([values[1], values[0]]);
    default: {
      var index         = 0;
      var created       = (Array(length));
      created[--length] = (values[index]);
      created[index]    = (values[length]);
      while (++index < length) {
        (created[--length] = values[index]);
        (created[index]    = values[length]);
      }
      return (created);
    };
  };
};
