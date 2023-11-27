var exists = (hasOwn => keys => value => keys.every(key => hasOwn(value, key)))(Object.hasOwn);
export default exists;
