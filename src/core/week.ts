import {addDays, MS_PER_DAY, startOfDay} from "./dateMath";

/**
 * Monday = 0
 * Sunday = 6
 */
function weekdayMondayFirst(date: Date): number {
    const day = date.getDay();
    return day === 0 ? 6 : day - 1;
}

export function getWeekStart(date: Date): Date {
    const d = startOfDay(date);
    const weekday = weekdayMondayFirst(d);
    return new Date(d.getTime() - weekday * MS_PER_DAY);
}

export function getWeekDays(date: Date): Date[] {
    const start = getWeekStart(date);
    return Array.from(
        { length: 7 },
        (_, i) => addDays(start, i),
    );
}

export function getMonday(date: Date): Date {
    return getWeekStart(date);
}

export function getTimeSlots(startHour: number, endHour: number): number[] {
    return Array.from({ length: endHour - startHour }, (_, i) => startHour + i)
}