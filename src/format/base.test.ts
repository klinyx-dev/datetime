import { describe, expect, it } from "vitest";
import { formatDateDefault, formatDateTimeDefault, formatTimeDefault } from "./base";

describe("default formatting helpers", () => {
    it("formats date, time, and datetime values without requiring a locale", () => {
        const input = "2026-05-04T09:30:00.000Z";

        expect(formatDateDefault(input)).toBe(new Date(input).toLocaleDateString());
        expect(formatTimeDefault(input)).toBe(
            new Date(input).toLocaleTimeString([], {
                hour: "2-digit",
                minute: "2-digit",
            }),
        );
        expect(formatDateTimeDefault(input)).toBe(new Date(input).toLocaleString());
    });
});
