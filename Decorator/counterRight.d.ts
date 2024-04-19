import type Lambda from "../Types/Lambda";
function counterRight<Call extends Lambda<any, any>>(call: Lambda<Call, number>): Call;
