// Typescript tip 7
// The looseness of Object.keys can be a real pain point when using TypeScript.
// Luckily, it's pretty simple to create a tighter version using generics and the keyof operator.

// https://twitter.com/mpocock1/status/1502264005251018754

export const myObject = {
  a: 1,
  b: 2,
  c: 3,
};

// This spits out an error
// Object.keys(myObject).forEach((key) => {
//   myObject[key];
// });

const objectKeys = <Obj>(obj: Obj): (keyof Obj)[] => {
  return Object.keys(obj) as (keyof Obj)[];
};

// This works
objectKeys(myObject).forEach((key) => {
  myObject[key];
});
