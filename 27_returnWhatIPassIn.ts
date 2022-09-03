// 🔥 TypeScript Tip #27 🔥

// A simple function - returnWhatIPassIn - can be enough to stump many newbie TypeScript devs.

// Here, I compare two approaches - function overloads and generics - to see which one works best.

// https://twitter.com/mattpocockuk/status/1549783691609587712

// If we want to build a function that returns whats passed in, we have 2 options:
// 1st option: Function overloads

export function returnWhatIPassIn(input: string): string
export function returnWhatIPassIn(input: number): number

// ...
export function returnWhatIPassIn(input: unknown): unknown {
    return input
};

const resultA = returnWhatIPassIn('something');

// This gets tedius very quickly as we have to cater for every imaginable input combination
// Instead we can use generics to get the job done:

export function returnWhatIPassInOptimized<TInput>(input: TInput): TInput {
    return input;
}

const resultB = returnWhatIPassInOptimized({
    name: 'John'
});