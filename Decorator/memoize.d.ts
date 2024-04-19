import type Lambda from "../Types/Lambda";
export default function memoize<Call extends Lambda<any, any>>(call: Call): Call;
