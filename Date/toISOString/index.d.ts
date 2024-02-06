import type E1                 from "../../types/Number/E1";
import type DaysPerMonth       from "../../types/Time/DaysPerMonth";
import type HoursPerDay        from "../../types/Time/HoursPerDay";
import type MinutesPerHour     from "../../types/Time/MinutesPerHour";
import type MonthPerYear       from "../../types/Time/MonthPerYear";
import type SecondsPerMinute   from "../../types/Time/SecondsPerMinute";


type Digit2<Value extends number> = Value extends E1 ? `0${Value}` : `${Value}`

type ISO_TIME      = `${Digit2<HoursPerDay>}:${Digit2<MinutesPerHour>}:${Digit2<SecondsPerMinute>}`;
type ISO_DATE      = `${number}-${Digit2<MonthPerYear>}-${Digit2<DaysPerMonth>}`;
type ISO_TIME_ZONE = `${number}${number}${number}Z`
type ISO           = `${ISO_DATE}T${ISO_TIME}.${ISO_TIME_ZONE}`;

type _ISO_TIME     = `${0 | 1}${0 | 1 | 2}:${0 | 1 | 2 | 3 | 4 | 5}${number}:${0 | 1 | 2 | 3 | 4 | 5}${number}`;
type _ISO          = `${ISO_DATE}T${_ISO_TIME}.${ISO_TIME_ZONE}`;

export default function toISOString(value: Date): _ISO;
