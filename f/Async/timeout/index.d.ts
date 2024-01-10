import type Lambda from "../../types/Lambda";

declare var timeout: <
   Next extends number,
  _Call extends Lambda<any, any> = Lambda<any, any>,
>(next: Next) => <
  Call extends _Call
>(call: Call) => ReturnType<typeof setTimeout>;

export default timeout;
