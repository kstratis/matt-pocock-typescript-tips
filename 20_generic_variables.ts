// 🔥 TypeScript Tip #20 🔥

// You can DRY up your generics code MASSIVELY (and improve perf) by assigning local variables to default generic slots.

// Here, we move some complex 'Extract' logic to a generic slot, meaning it only gets calculated once.

// https://twitter.com/mattpocockuk/status/1516752789564764160

export type Obj = {
  a: "FOO";
  a2: "a2";
  a3: "a3";
  b: "b";
  b1: "b1";
  b2: "b2";
};

// Original problem - DUPLICATION of `Extract<keyof Obj, `a${string}`>`
type ValuesOfKeysStartingWithA<Obj> = {
  [K in Extract<keyof Obj, `a${string}`>]: Obj[K];
}[Extract<keyof Obj, `a${string}`>];

// Solution: Use private (starting with `_`) variables
type ValuesOfKeysStartingWithAOptimized<
  Obj,
  _ExtractedKeys extends keyof Obj = Extract<keyof Obj, `a${string}`>
> = {
  [K in _ExtractedKeys]: Obj[K];
}[_ExtractedKeys];

// DEBUG
type test = Extract<keyof Obj, `a${string}`>;

type NewUnion = ValuesOfKeysStartingWithA<Obj>;
type NewUnionOptimizd = ValuesOfKeysStartingWithAOptimized<Obj>;

