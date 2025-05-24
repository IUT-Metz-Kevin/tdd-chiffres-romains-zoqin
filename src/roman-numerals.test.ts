import { expect, it, test } from "vitest";

class RomanNumeral {
    private _romanLetterToDecimal = {
        "I": 1,
        "V": 5,
        "X": 10,
        "L": 50,
        "C": 100,
        "D": 500,
        "M": 1000,
    };

    of(romanNumber: string): number {
        let number = 0;

        for (let i = 0; i < romanNumber.length; i++) {
            const currentValue = this._romanLetterToDecimal[romanNumber[i]];
            const nextValue = this._romanLetterToDecimal[romanNumber[i + 1]];

            //console.log(typeof currentValue === "number")

            if (!currentValue) {
                throw new Error("every caractere must be roman number");
            }

            //console.log("valeur actuelle", valeurActuelle, "prochaine valeur",prochaineValeur, "comparaison va<pv", valeurActuelle<prochaineValeur)

            if (nextValue && currentValue < nextValue) {
                number -= currentValue;
            } else {
                number += currentValue;
            }
        }

        return number;
    }
}

let convertiseurRoman = new RomanNumeral();

// Write your test here
it("should give 1-2-3 for first 3I ", function () {
    expect(convertiseurRoman.of("I")).toBe(1),
        expect(convertiseurRoman.of("II")).toBe(2),
        expect(convertiseurRoman.of("III")).toBe(3);
});

it("should give 4 for IV", function () {
    expect(convertiseurRoman.of("IV")).toBe(4);
});

it("should give 5 for V", function () {
    expect(convertiseurRoman.of("V")).toBe(5);
});

it("should give 10 for X", function () {
    expect(convertiseurRoman.of("X")).toBe(10);
});

it("should give 50 for L", function () {
    expect(convertiseurRoman.of("L")).toBe(50);
});

it("should give 100 for C", function () {
    expect(convertiseurRoman.of("C")).toBe(100);
});

it("should give 500 for D", function () {
    expect(convertiseurRoman.of("D")).toBe(500);
});

it("should give 1000 for M", function () {
    expect(convertiseurRoman.of("M")).toBe(1000);
});

it("should give 999 for CMXCIX", function () {
    expect(convertiseurRoman.of("CMXCIX")).toBe(999);
});

it("should give 1988 for MCMLXXXVIII", function () {
    expect(convertiseurRoman.of("MCMLXXXVIII")).toBe(1988);
});

it("should give 450 for CDL", function () {
    expect(convertiseurRoman.of("CDL")).toBe(450);
});

it("should throw error for string with letter outside of the roman number", function () {
    expect(() => convertiseurRoman.of("abcdef")).toThrowError();
    expect(() => convertiseurRoman.of("ABCDEF")).toThrowError();
});

it("should throw error for one letter outside of the roman number", function () {
    expect(() => convertiseurRoman.of("MCMLXXXVIIIf")).toThrowError();
    expect(() => convertiseurRoman.of("MCMLXXXVIIIF")).toThrowError();
});

it("should throw error for roman number in lower case", function () {
    expect(() => convertiseurRoman.of("mcmlxxxviii")).toThrowError();
    expect(() => convertiseurRoman.of("cdl")).toThrowError();
});
