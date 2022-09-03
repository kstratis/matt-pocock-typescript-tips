// 🔥 TypeScript Tip #13 🔥

// Want to turn a module into a type? You can use typeof import('./') to grab the type of any module, even third-party ones.

// Here, we create a type from a constants.ts file, then map over the values to create a union.

// https://twitter.com/mattpocockuk/status/1508408811635322883

export type ActionModule = typeof import("./constants");
// `ActionModule` is an object

export type Action = ActionModule[keyof ActionModule];