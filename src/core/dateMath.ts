export const MS_PER_DAY = 24 * 60 * 60 * 1000;

export function startOfDay(date: Date): Date {
    const output = new Date(date);
    output.setHours(0, 0, 0, 0);
    return output;
}

export function addDays(date: Date, days: number): Date {
    return new Date(date.getTime() + days * MS_PER_DAY);
}

export function addWeeks(date: Date, weeks: number): Date {
    return addDays(date, weeks * 7);
}

export function isSameDay(date1: Date, date2: Date): boolean {
    return (
        date1.getFullYear() === date2.getFullYear() &&
        date1.getMonth() === date2.getMonth() &&
        date1.getDate() === date2.getDate()
    );
}