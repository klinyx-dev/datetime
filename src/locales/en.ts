import {formatDate, formatTime, formatWeekRangeShort} from "../format/base";
import {timeOfDayToDate} from "../core/hour";

const EN = "en-US";

export const formatHourEn = (hour: number) => formatTime(timeOfDayToDate(hour), EN);

export const formatDateEn = (input: string | Date, options: Intl.DateTimeFormatOptions)=> formatDate(input, EN, options);

export const formatTimeEn = (input: string | number | Date) => formatTime(input, EN);

export const formatWeekRangeEn = (start: Date) => formatWeekRangeShort(start, EN);