import future from "../Monad/future.js";

export default new Proxy(Boolean, {
  get (_, key) {
    return future((resolve) => import(`./${key}.js`).then(resolve));
  }
});
