export function isoToday(): string {
    return new Date().toISOString().slice(0, 10);
}

export function shiftIsoDate(isoDate: string, days: number): string {
    const date = new Date(`${isoDate}T00:00:00Z`);
    date.setUTCDate(date.getUTCDate() + days);
    return date.toISOString().slice(0, 10);
}

export function isoFromWeekPoint(
    weekStartIso: string,
    dayIndex: number,
    minuteOfDay: number,
): string {
    const date = new Date(`${weekStartIso}T00:00:00Z`);
    date.setUTCDate(date.getUTCDate() + dayIndex);
    date.setUTCHours(0, minuteOfDay, 0, 0);
    return date.toISOString();
}
