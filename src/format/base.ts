function toDate(input: string | Date): Date {
    return input instanceof Date ? input : new Date(input);
}

export function formatDate(input: string | Date, locale: string, options: Intl.DateTimeFormatOptions): string {
    return toDate(input).toLocaleDateString(locale, options);
}

export function formatTime(
    input: string | Date,
    locale: string,
    options: Intl.DateTimeFormatOptions = { hour: "2-digit", minute: "2-digit" },
): string {
    return toDate(input).toLocaleTimeString(locale, options);
}

export function formatWeekRangeShort(start: Date, locale: string): string {
    const end = new Date(start);
    end.setDate(end.getDate() + 6);

    const fmt = (date: Date) => date.toLocaleDateString(locale, { day: "numeric", month: "short" });

    return `${fmt(start)} - ${fmt(end)}`;
}