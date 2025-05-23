import { it, expect, test } from "vitest";

class RomanNumeral {
  of(value: string): number {
    if(value === "I") return 1
    if(value === "II") return 2
    if(value === "III") return 3
    return 0
  }
}

let convertiseurRoman = new RomanNumeral()

// Write your test here
it("First 3I should give 1-2-3", function() {
    expect(convertiseurRoman.of("I")).toBe(1),
    expect(convertiseurRoman.of("II")).toBe(2),
    expect(convertiseurRoman.of('III')).toBe(3);
});