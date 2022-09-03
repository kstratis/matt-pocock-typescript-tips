// 🔥 TypeScript Tip #22 🔥

// This mental model is INCREDIBLY useful for all sorts of intermediate-advanced typings:

// If TypeScript knows a value can't change, it'll infer it to its literal type.

// https://twitter.com/mattpocockuk/status/1526162474084737024

export let age = 31;

export const name = "Matt";

const tsPeople = ["Andarist", "Titian", "Devansh", "Anurag"] as const;

tsPeople[0] = "Eddy";

const moreTsPeople = {
  Andarist: "Andarist",
  Titian: "Titian",
  Devansh: "Devansh",
  Anurag: "Anurag",
} as const;

// Notice the assignability error
moreTsPeople.Andarist = "whatever";
