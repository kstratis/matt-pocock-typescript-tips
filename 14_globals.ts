// Globals in TypeScript?! 🤯

// `declare global` is a super useful tool for when you want to allow types to cross module boundaries.

// Here, we create a `GlobalReducer` type, where you can add new event types as you create new reducers.

// https://twitter.com/mattpocockuk/status/1509131700382715905

import { GlobalReducer } from "./types";
// See also types.ts for this

declare global {
  interface GlobalReducerEvent {
    ADD_TODO: {
      text: string;
    };
  }
}

export const todosReducer: GlobalReducer<{ todos: { id: string }[] }> = (
  state,
  event
) => {
  return state;
};

// Demo
todosReducer({ todos: [{ id: "Bob" }, { id: "Alice" }] }, { type: "LOG_IN" });
