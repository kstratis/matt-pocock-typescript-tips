// 🔥 TypeScript Tip #26 🔥

// Still struggling with infer? How about this - you can use it in combination with string literals to manipulate keys of objects.

// SUPER useful when you've got an external API you can't control giving you weird, non-JavaScripty keys.

// https://twitter.com/mattpocockuk/status/1549011100364144647

interface ApiData {
  "maps:longitude": string;
  "maps:latitude": string;
}

type RemoveMapsFromObj<T> = {
  [K in keyof T as RemoveMaps<K>]: T[K];
};

type DesiredShape = RemoveMapsFromObj<ApiData>;

type RemoveMaps<T> = T extends `maps:${infer U}` ? U : T;
