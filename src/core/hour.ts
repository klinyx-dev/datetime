export function timeOfDayToDate(hour: number, minute = 0): Date {
    const d = new Date(1970, 0, 1);
    d.setHours(hour, minute, 0, 0);
    return d;
}