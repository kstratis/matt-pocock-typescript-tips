// 🔥 TypeScript Tip #16 🔥

// The `noUncheckedIndexedAccess` is the most awesome config option you've never heard of.
// It makes accessing objects a lot safer, and also powers up TypeScript's inference on objects.

//Props to @AndaristRake for this one.

// https://twitter.com/mattpocockuk/status/1510938191091712007

// Notes:
// This effectively errors out `foo` since it may not be correct/exist.
// To make this work add the option `noUncheckedIndexedAccess: true` in tsconfig.json

export const myObj: Record<string, string[]> = {};

if (!myObj.foo) {
  myObj.foo = [];
}

myObj.foo.push("bar");
