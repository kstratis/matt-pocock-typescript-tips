// 🔥 TypeScript Tip #10 🔥

// Using a crazy trick I picked up from @AndaristRake,
// you can throw detailed error messages for type checks.

// Here, I move a runtime check in a function to the type level,
// meaning you get a detailed error if you use it wrong.

// https://twitter.com/mattpocockuk/status/1504802045794078723

type checkForBadArgs<Arg> = Arg extends any[]
  ? "You cannot compare two arrays using deepEqualCompare"
  : Arg;

export const deepEqualCompare = <Arg>(
  a: checkForBadArgs<Arg>,
  b: checkForBadArgs<Arg>
): boolean => {
  if (Array.isArray(a) || Array.isArray(b)) {
    throw new Error("You cannot compare two arrays using deepEqualCompare");
  }
  return a === b;
};

// demo
deepEqualCompare(1, 1);
deepEqualCompare([], []);
