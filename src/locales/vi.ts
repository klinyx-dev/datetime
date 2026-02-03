import {formatDate, formatTime, formatWeekRangeShort} from "../format/base";

const VI = "vi-VN";

export const formatDateVi = (input: string | Date, options: Intl.DateTimeFormatOptions)=> formatDate(input, VI, options);

export const formatTimeVi = (input: string | Date) => formatTime(input, VI);

export const formatWeekRangeVi = (start: Date) => formatWeekRangeShort(start, VI);