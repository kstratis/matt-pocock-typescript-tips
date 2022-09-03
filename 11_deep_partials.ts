// 🔥 TypeScript Tip #11 🔥

// Deep partials are SUPER useful and not natively supported by TypeScript.
// Here, I use one to help with mocking an entity in a (imaginary) test file.

// https://twitter.com/mattpocockuk/status/1505892984658743300

// THIS ONE IS A BIT WEIRD

export type DeepPartial<Thing> = Thing extends Function
  ? Thing
  : Thing extends Array<infer InferredArrayMember>
  ? DeepPartialArray<InferredArrayMember> // DeepPartialArray<{value: string}>
  // ? Array<DeepPartial<InferredArrayMember>>  // Alternatively we could also directly write this! The interface `DeepPartialArray` has been created for clarity!
  : Thing extends object
  ? DeepPartialObject<Thing>
  : Thing | undefined;

// This thing here just tries to infer something like this: Array<{value: string}>
// It also allows adding a couple more properties if you like. It's not a conditional.
// Just an interface that extends.
interface DeepPartialArray<Thing> extends Array<DeepPartial<Thing>> {}  

type DeepPartialObject<Thing> = {
  [Key in keyof Thing]?: DeepPartial<Thing[Key]>;
};

interface Post {
  id: string;
  comments: { identity: string }[];
  meta: {
    name: string;
    description: string;
  };
}

// demo
const post: DeepPartial<Post> = {
    id: '1',
    comments: [{identity: 'a'}, {identity: 'b'}],
  
};

// debug
// type ddd = string extends object ? '1' : '2'