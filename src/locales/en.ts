import {formatDate, formatTime, formatWeekRangeShort} from "../format/base";

const EN = "en-US";

export const formatDateEn = (input: string | Date, options: Intl.DateTimeFormatOptions)=> formatDate(input, EN, options);

export const formatTimeEn = (input: string | Date) => formatTime(input, EN);

export const formatWeekRangeEn = (start: Date) => formatWeekRangeShort(start, EN);