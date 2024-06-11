import type Lambda from "../Types/Lambda";
export default function memoizeWeakTry<Call extends Lambda<any, Record<any, any>>>(call: Call): Call;
