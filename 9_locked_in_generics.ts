// 🔥 TypeScript Tip #9 🔥

// Generics can be 'locked in' by function calls, meaning that generics can be 'curried' through functions.
// Here, we create a 'key remover' function which can process any generic object.

// https://twitter.com/mattpocockuk/status/1504088070869884929

export const makeKeyRemover = 
<Key extends string>(keys: Key[]) =>
<Obj>(obj: Obj): Omit<Obj, Key> => {
    return {} as any;
}

const keyRemover = makeKeyRemover(["a", "b"]);

const newObject = keyRemover({a: 1, b: 2, c: 3});

// demo
newObject.c

// Effectively
// Key[] (`["a", "b"]`) becomes the union `"a" | "b"`