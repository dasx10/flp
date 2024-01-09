export default (freeze) => (call) => new Promise((resolve, reject) => setTimeout(() => Promise.resolve(call()).catch(reject).then(resolve), freeze));
