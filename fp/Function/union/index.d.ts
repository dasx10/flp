import type Lambda from "../../types/Lambda";

type StepParameters<Call> = Call extends Lambda<infer Return, infer Value>
  ? [Value, ...StepParameters<Return>]
  : [];

type StepReturnType<Call> = Call extends Lambda<infer Return, any>
  ? StepReturnType<Return>
  : Call;

export default function union<Call extends Lambda<any, any>>(call: Call): (...values: StepParameters<Call>) => StepReturnType<Call>;
