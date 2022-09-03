// 🔥 TypeScript Tip #17 🔥

// Mapping over a union type can feel tricky to conceptualise. But actually, TypeScript does it all for you - using Distributive Conditional Types 🤯

// Here, we create RemoveC - a type helper to remove 'c' from a union of letters.

// https://twitter.com/mattpocockuk/status/1511664262665670657

export type Letters = "a" | "b" | "c";

type RemoveC<TType> = TType extends "c" ? never : TType;

type WowWithoutC = RemoveC<Letters>;
