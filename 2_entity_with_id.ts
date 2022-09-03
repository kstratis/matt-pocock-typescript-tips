// Typescript tip 2
// Transform a union to another union, using the 'in' operator as a kind of for-loop.
// This pattern can be used for almost any kind of transformation - here, I add a dynamic key.
// https://twitter.com/mpocock1/status/1498284926621396992

export type Entity =
    | {
        type: "user";
      }
    | {
        type: "post";
      }
    | {
        type: "comment";
      };

// DEBUG      
// We need the following instead of manually typing it as below to be auto-generated
// type EntityWithId = 
//     | {
//         type: "user";
//         userId: string;
//     }
//     | {
//         type: "post";
//         postId: string
//     }
//     | {
//         type: "comments"
//         commentsId: string
//     };

// DEBUG
// type demo = Entity["type"];

// DEBUG
// type EntityWithId = {
//     [EntityType in Entity["type"]]: {
//         type: EntityType;
//     }
// };


// This `Record<`${EntityType}Id`, string>` means a string or rather an Object where `${EntityType}Id` is the key
// and `string` is the value of that key.
type EntityWithId = {
    [EntityType in Entity["type"]]: {
        type: EntityType;
    } & Record<`${EntityType}Id`, string>
}[Entity["type"]];

const result: EntityWithId = {
    type: 'comment',
    commentId: '123'
}
