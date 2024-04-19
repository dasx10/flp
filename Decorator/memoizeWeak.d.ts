import type Lambda from "../Types/Lambda";
export default function memoizeWeak<Call extends Lambda<any, Record<any, any>>>(call: Call): Call;
