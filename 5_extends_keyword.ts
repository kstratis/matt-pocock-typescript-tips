// Typescript tip 5
// The 'extends' keyword is very powerful in TypeScript.
// Here, I use it to narrow the value of a generic to enable some beautiful autocomplete/inference.

// https://twitter.com/mpocock1/status/1500813765973053440

export const getDeepValue = <
  Obj,
  FirstKey extends keyof Obj,
  SecondKey extends keyof Obj[FirstKey]
>(
  obj: Obj,
  firstKey: FirstKey,
  secondKey: SecondKey
): Obj[FirstKey][SecondKey] => {
  return {} as any;
};

const obj = {
  foo: {
    a: true,
    b: 2,
  },
  bar: {
    c: "cool",
    d: 2,
  },
};

const result = getDeepValue(obj, "bar", "d");
