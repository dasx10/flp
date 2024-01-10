var ifElse = test => reject => resolve => value => test(value) ? resolve(value) : reject(value);
export default ifElse;
