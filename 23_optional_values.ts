// 🔥 TypeScript Tip #23 🔥

// This one little tip has saved me hours of refactoring time.

// Passing string | undefined instead of ?: string ensures that ALL call sites must be given a value - amazing when you need to check every case in your repo.

// https://twitter.com/mattpocockuk/status/1534130638755880961

interface UserInfo {
  name: string;
  role?: "admin" | undefined;
}

export const createUser = (userInfo: UserInfo) => {};

createUser({
  name: "Matt",
  role: "admin",
});

createUser({
  name: "John",
  role: "admin",
});

createUser({
  name: "Chris",
});
