var notElse = test => reject => resolve => value => test(value) ? reject(value) : resolve(value);
export default notElse;
