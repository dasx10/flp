import type Lambda from "../Types/Lambda";
function counter<Call extends Lambda<any, any>>(call: Lambda<Call, number>): Call;
