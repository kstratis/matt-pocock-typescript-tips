// 🔥 TypeScript Tip #28 🔥

// export type Result = string extends "matt"
//   ? true
//   : false;

// I always find these conditional types SUPER hard to read.

// If you think Result is true, you might need a better mental model for assignability in TypeScript.

// https://twitter.com/mattpocockuk/status/1552254507496652800

// Animals/Dogs/Labrador

class Animal {
  isAnimal() {
    return true;
  }
}

class Dog extends Animal {
  isDog() {
    return true;
  }
}

class Labrador extends Dog {
  isLabrador() {
    return true;
  }
}

const takeForWalk = (dog: Dog) => {};

takeForWalk(new Dog());
takeForWalk(new Labrador());
takeForWalk(new Animal()); // Notice the assignability error here!

type Name = string;
type GoodName = VeryGoodName | "fred";
type VeryGoodName = "matt";

const isGoodName = (name: GoodName) => {};

isGoodName("matt");

export type ResultA = Name extends GoodName ? true : false;

// If we invert the conditional though:
export type ResultB = GoodName extends Name ? true : false;
