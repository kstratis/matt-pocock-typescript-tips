// 🔥 TypeScript Tip #15 🔥

// You can use generics to dynamically specify the number, and type, of arguments to functions.

// Here, we create a `sendEvent` function which only asks for a `payload` if it's present on the event you're sending.

// https://twitter.com/mattpocockuk/status/1509850662795989005

export type Event =
  | {
      type: "LOG IN";
      payload: {
        userId: string;
      };
    }
  | {
      type: "SIGN_OUT";
    };

// Original
// const sendEvent = (eventType: Event["type"], payload?: any) => {};

// Solution
const sendEvent = <Type extends Event["type"]>(
  ...args: Extract<Event, { type: Type }> extends { payload: infer TPayload }
    ? [Type, TPayload]
    : [Type]
) => {};

// Improved solution
const sendEventImproved = <Type extends Event["type"]>(
  ...args: Extract<Event, { type: Type }> extends { payload: infer TPayload }
    ? [type: Type, payload: TPayload] // This is a "named tuple"
    : [type: Type]
) => {};

// Demo
sendEvent("LOG IN", { userId: "123" });
sendEventImproved("LOG IN", { userId: "123" });

sendEvent("SIGN_OUT");
sendEventImproved("SIGN_OUT");
