// 🔥 TypeScript Tip #24 🔥

// Deriving vs Declaring is key to getting the most inference out of your types with as few lines of code as possible.

// But sometimes, you want to _ensure_ that some code conforms to a type without losing its literal values.

// Enter satisfies()() 👀

// https://twitter.com/mattpocockuk/status/1536670032360611840

// THERE ARE 3 VERSIONS OF THIS:

// -=VERSION 1=-
// Originally we had this:
type ActionPreconfigured = "view" | "create" | "update" | "delete";
type RolePreconfigured = "anonynous" | "admin" | "loggedIn";

export const userActionsOriginal: {
  type: ActionPreconfigured;
  roles: RolePreconfigured[];
}[] = [
  {
    type: "view",
    roles: ["anonynous", "admin"],
  },
  {
    type: "create",
    roles: ["admin"],
  },
  {
    type: "update",
    roles: ["admin", "loggedIn"],
  },
  {
    type: "delete",
    roles: ["admin"],
  },
];

type ActionOriginal = typeof userActionsOriginal[number]["type"];
type RoleOriginal = typeof userActionsOriginal[number]["roles"][number];

// Verdict
// The problem with this solution is that it is "declared" meaning that we have to preconfigure both
// the `type` and `roles`. It's not dynamic and is not inferred/flexible.

// ---------------------------------------------------

// -=VERSION 2=-
// This version tries to infer things automatically
export const userActionsModified: {
  type: string;
  roles: string[];
}[] = [
  {
    type: "view",
    roles: ["anonynous", "admin"],
  },
  {
    type: "create",
    roles: ["admin"],
  },
  {
    type: "update",
    roles: ["admin", "loggedIn"],
  },
  {
    type: "delete",
    roles: ["admin"],
  },
]; // try removing the `as const` here and observe the difference

type ActionModified = typeof userActionsModified[number]["type"];
type RoleModified = typeof userActionsModified[number]["roles"][number];

// Verdict
// The problem with this solution is that `ActionModified` comes back as a generic string.
// Same goes for `RoleModified` which comes back as `string[]`.

// ---------------------------------------------------

// -=VERSION 3=-
// This version tries to infer things automatically
export const userActionsModified2 = [
  {
    type: "view",
    roles: ["anonynous", "admin"],
  },
  {
    type: "create",
    roles: ["admin"],
  },
  {
    type: "update",
    roles: ["admin", "loggedIn"],
  },
  {
    type: "delete",
    roles: ["admin"],
  },
] as const; // Here we added the `as const` to narrow things down

type ActionModified2 = typeof userActionsModified2[number]["type"];
type RoleModified2 = typeof userActionsModified2[number]["roles"][number];

// Verdict
// This seems to work but there's one last problem: removing the `type`/`roles` or simply mistyping them results in a cryptic error.
// In other words in this version Typescript can't guarantee (or support with a meaningful message) the structure of `userActionsModified2`.
// If we add back the types `:{type: string; roles: string[]}[]` in `userActionsModified2` we get the structure back but then we lose the
// type narroweness as `type` and `roles` become (string/string[]) again.

// ---------------------------------------------------

// -=FINAL VERSION=-
import { F } from "ts-toolbelt";

const satisfies =
  <TWide>() =>
  <TNarrow extends TWide>(narrow: F.Narrow<TNarrow>) =>
    narrow;

// demo
const num = satisfies<number>()(2);

export const userActions = satisfies<{ type: string; roles: string[] }[]>()([
  {
    type: "view",
    roles: ["anonynous", "admin"],
  },
  {
    type: "create",
    roles: ["admin"],
  },
  {
    type: "update",
    roles: ["admin", "loggedIn"],
  },
  {
    type: "delete",
    roles: ["admin"],
  },
]);

type Action = typeof userActions[number]["type"];
type Role = typeof userActions[number]["roles"][number];
