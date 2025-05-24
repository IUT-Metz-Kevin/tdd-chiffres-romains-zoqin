import { it, expect, test } from "vitest";

class RomanNumeral {
  of(romanNumber: string): number {
    let number = 0;

    const romanLetterToDecimal = {
        'I' : 1,
        'V' : 5,
        'X' : 10,
        'L' : 50,
        'C' : 100,
        'D' : 500,
        'M' : 1000
    };

    for(let i = 0; i<romanNumber.length;i++) {
        const currentValue = romanLetterToDecimal[romanNumber[i]]
        const nextValue = romanLetterToDecimal[romanNumber[i+1]]
        
        //console.log("valeur actuelle", valeurActuelle, "prochaine valeur",prochaineValeur, "comparaison va<pv", valeurActuelle<prochaineValeur)
        
        if(nextValue && currentValue<nextValue) {
            number -= currentValue
        } else {
            number += currentValue
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

it("should give 100 for C", function() {
    expect(convertiseurRoman.of("C")).toBe(100)
})

it("should give 500 for D", function() {
    expect(convertiseurRoman.of("D")).toBe(500)
})

it("should give 1000 for M", function() {
    expect(convertiseurRoman.of("M")).toBe(1000)
})

it("should give 999 for CMXCIX", function() {
    expect(convertiseurRoman.of("CMXCIX")).toBe(999)
})

it("should give 1988 for MCMLXXXVIII", function() {
    expect(convertiseurRoman.of("MCMLXXXVIII")).toBe(1988)
})

it("should give 450 for CDL", function() {
    expect(convertiseurRoman.of("CDL")).toBe(450)
})