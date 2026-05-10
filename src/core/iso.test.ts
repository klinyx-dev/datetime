import { describe, expect, it, vi } from "vitest";
import { isoFromWeekPoint, isoToday, shiftIsoDate } from "./iso";

describe("ISO date helpers", () => {
    it("returns today's ISO date in UTC", () => {
        vi.useFakeTimers();
        vi.setSystemTime(new Date("2026-05-10T23:30:00.000Z"));

        expect(isoToday()).toBe("2026-05-10");

        vi.useRealTimers();
    });

    it("shifts ISO dates by UTC day increments", () => {
        expect(shiftIsoDate("2026-05-04", 7)).toBe("2026-05-11");
        expect(shiftIsoDate("2026-05-04", -7)).toBe("2026-04-27");
    });

    it("converts a week point to an ISO timestamp", () => {
        expect(isoFromWeekPoint("2026-05-04", 2, 9 * 60 + 30)).toBe(
            "2026-05-06T09:30:00.000Z",
        );
    });
});
