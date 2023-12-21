import type Lambda from "./Lambda";

type Namespace = {
  readonly [key in string]?: Promise<Lambda<unknown, unknown>>;
}

export default Namespace;
