import { it, expect, test } from "vitest";

class RomanNumeral {
  of(value: string): number {
    let number = 0
    //if(value === "IV") return 4
    for(let c of value) {
        if(c === "I") {
            if(value[value.indexOf(c)+1] === "V") {
                number += 4
            } else {
                number++
            }
        }
    }
    return number
  }
}

let convertiseurRoman = new RomanNumeral()

// Write your test here
it("should give 1-2-3 for first 3I ", function() {
    expect(convertiseurRoman.of("I")).toBe(1),
    expect(convertiseurRoman.of("II")).toBe(2),
    expect(convertiseurRoman.of('III')).toBe(3);
});

it("should give 4 for IV", function() {
    expect(convertiseurRoman.of("IV")).toBe(4) 
})