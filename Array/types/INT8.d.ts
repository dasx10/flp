import type { TO_M90 } from "./ME2";
import type { TO_120 } from "./UINT8";

export type POS_INT8 = TO_120 | 120 | 121 | 122 | 123 | 124 | 125 | 126 | 127;
export type NEG_INT8 = TO_M90 | -90 | -91 | -92 | -93 | -94 | -95 | -96 | -97 | -98 | -99 | -100 | -120 | -121 | -122 | -123 | -124 | -125 | -126 | -127;

type INT8 = POS_INT8 | NEG_INT8;

export default INT8;
