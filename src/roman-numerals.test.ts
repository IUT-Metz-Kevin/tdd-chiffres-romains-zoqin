import { it, expect, test } from "vitest";

class RomanNumeral {
  of(value: string): number {
    let number = 0

    for(let c of value) {
        if(c === "X") {
            number += 10
        }
        if(c === "V") {
            if(value[value.indexOf(c)-1] === "I") {
                //do nothing
            } else {
                number += 5
            }
        }
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

it("should give 5 for V", function() {
    expect(convertiseurRoman.of("V")).toBe(5)
})

it("should give 10 for X", function() {
    expect(convertiseurRoman.of("X")).toBe(10)
})

it("should give 50 for L", function() {
    expect(convertiseurRoman.of("L")).toBe(50)
})