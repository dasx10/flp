import type Lambda from "../Types/Lambda";
export default function o<Return, Y>(call: Lambda<Return, Y>): <X>(call: Lambda<Y, X>) => Lambda<Return, X>;
