// TypeScript Tip #8 

// You can use generics in React to make incredibly dynamic, flexible components. 
// Here, I make a Table component with a generic 'items' type.

// https://twitter.com/mpocock1/status/1503352924537339904

// Check this out
import React from "react";

// interface TableProps {
//   items: { id: string }[];
//   renderItem: (item: { id: string }) => React.ReactNode;
// }

// export const Table = (props: TableProps) => {
//   return null;
// };

// const Component = () => {
//   return (
//     <Table
//       items={[
//         {
//           id: "1",
//         },
//       ]}
//       renderItem={(item) => <div>{item.id}</div>}
//     ></Table>
//   );
// };

// ------------------------------------------------------------------
// Problem with the above is that you can't accept ANY kind of items.
// We can fix this using the refactored version below:
// ------------------------------------------------------------------

interface TableProps<TItem> {
    items: TItem[];
    renderItem: (item: TItem) => React.ReactNode;
  }
  
  export function Table<TItem>(props: TableProps<TItem>){
      return null;
  };
//   export const Table = (props: TableProps) => {
//     return null;
//   };
  
  const Component = () => {
    return (
      <Table
        items={[
          {
            id: "1"
          },
        ]}
        renderItem={(item) => <div>{item.id}</div>}
      ></Table>
    );
  };