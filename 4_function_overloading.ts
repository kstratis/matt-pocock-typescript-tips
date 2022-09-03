// Typescript tip 4
// Function overloads can be used in conjunction with generics to make 
// incredibly complex and dynamic type signatures.

// Here, we make a compose function - incredibly useful for functional programming.
// https://twitter.com/mpocock1/status/1499730377337827336

function compose<Input, FirstArg>(
  func: (input: Input) => FirstArg
): (input: Input) => FirstArg;

function compose<Input, FirstArg, SecondArg>(
  func: (input: Input) => FirstArg,
  func2: (input: FirstArg) => SecondArg
): (input: Input) => SecondArg;

function compose<Input, FirstArg, SecondArg, ThirdArg>(
  func: (input: Input) => FirstArg,
  func2: (input: FirstArg) => SecondArg,
  func3: (input: SecondArg) => ThirdArg
): (input: Input) => ThirdArg;

function compose(...args: any[]) {
  // Implement later
  return {} as any;
}

const addOne = (a: number) => {
  return a + 1;
};

const numToString = (a: number) => {
  return a.toString();
};

const stringToNum = (a: string) => {
  return parseInt(a);
};

const addOneToString = compose(addOne, numToString, stringToNum);
