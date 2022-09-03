// 🔥 TypeScript Tip #18 🔥

// You can do some really, really neat stuff with assertion functions inside classes.

// Here, we assert that the user is logged in and get proper inference on the user's logged in user id.

// https://twitter.com/mattpocockuk/status/1512388535692652547

import { createPost } from "./utilities";

export class SDK {
  constructor(public loggedInUserId?: string) {}

  createPost(title: string) {
    this.assertUserIsLoggedIn();

    createPost(this.loggedInUserId, title);
  }

  assertUserIsLoggedIn(): asserts this is this & { loggedInUserId: string } {
    if (!this.loggedInUserId) {
      throw new Error("User is not logged in");
    }
  }
}
