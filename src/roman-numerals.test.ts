import { it, expect, test } from "vitest";

class RomanNumeral {
  of(value: string): number {
    
  }
}

let Convertiseur = new RomanNumeral()

// Write your test here
it("First 3I should give 1-2-3", function() {
    expect(Convertiseur.of("I")).toBe(1)
})