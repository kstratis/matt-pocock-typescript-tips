// Typescript tip 1
// How to derive a union type from an object
// https://twitter.com/mpocock1/status/1497262298368409605

export const fruitCounts = {
    apple: 1,
    pear: 4,
    banana: 26
};

// DEBUG
// type SingleFruitCount = { apple: number } | { banana: number } | { pear: number };

type FruitCounts = typeof fruitCounts;

// DEBUG
// type demo = keyof FruitCounts

type NewSingleFruitCount = {
    [K in keyof FruitCounts]: {
        [K2 in K]: number
    };
}[keyof FruitCounts]



const singleFruitCount: NewSingleFruitCount = {
    banana: 12
}