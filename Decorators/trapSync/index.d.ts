import type Constanta from "../../types/Constanta";
import type Lambda    from "../../types/Lambda";

export default function trapSync<Call extends Constanta>(call: Call): Call;
export default function trapSync<Call extends Lambda>(call: Call): Call;
