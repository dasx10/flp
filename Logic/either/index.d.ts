import type Lambda from "../../types/Lambda";

declare var either: <
   Next extends Lambda<any, any>,
  _Call extends Lambda<any, any> = Lambda<any, any>
>(next: Next) => <Call extends _Call>(call: Call) => ReturnType<Next> | ReturnType<Call>

export default either;
