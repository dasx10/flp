import getOwnPropertyDescriptors from "../Object/getOwnPropertyDescriptors.js";

var copyPrototype = (prototype) => {
  try {
    if (getOwnPropertyDescriptors) {
      var descriptors = getOwnPropertyDescriptors(prototype);
      var create = {};
      var key;
      for (key in descriptors) create[key] = descriptors[key].value;
      return create;
    }
  } catch (error) {
    return prototype;
  }
};

export default copyPrototype;
