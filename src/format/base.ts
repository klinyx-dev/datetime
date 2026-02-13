import {addDays} from "../core/dateMath";

const DEFAULT_OPTIONS: Intl.DateTimeFormatOptions = {
    hour12: false,
    hour: "2-digit",
    minute: "2-digit",
}

function toDate(input: string | Date | number): Date {
    return input instanceof Date ? input : new Date(input);
}

export function formatDate(input: string | Date, locale: string, options: Intl.DateTimeFormatOptions): string {
    return toDate(input).toLocaleDateString(locale, options);
}

export function formatTime(
    input: string | number | Date,
    locale: string,
    options: Intl.DateTimeFormatOptions = DEFAULT_OPTIONS,
): string {
    return toDate(input).toLocaleTimeString(locale, options);
}

export function formatWeekRangeShort(start: Date, locale: string): string {
    const end = new Date(start);
    end.setDate(end.getDate() + 6);

    const fmt = (date: Date) => date.toLocaleDateString(locale, { day: "numeric", month: "short" });

    return `${fmt(start)} - ${fmt(end)}`;
}

export function formatDateToLocal(date: Date): string {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
}

export function getWeekRangeLocal(weekStart: Date): { from: string; to: string } {
    return {
        from: formatDateToLocal(weekStart),
        to: formatDateToLocal(addDays(weekStart, 6)),
    };
}