// Typescript tip 6
// Type helpers change the game when it comes to types in your codebase.
// They help TypeScript infer more from your code - and make your types a lot more readable.
// Here, I write my own PropsFrom helper to extract props from any React component.

// https://twitter.com/mpocock1/status/1501533441791193090

import React from "react";

const MyComponent = (props: { enabled: boolean }) => {
  return null;
};

class MyOtherComponent extends React.Component<{
  enabled: boolean;
}> {}

// React.FC means Functional Component.
// Use plain React.Component for class based react components
type PropsFrom<TComponent> = TComponent extends React.FC<infer Props>
  ? Props
  : TComponent extends React.Component<infer Props>
  ? Props
  : never;

// DEBUG
// type test1 = typeof MyComponent;
// type test2 = typeof MyOtherComponent;

// --------------

// Use this
const compprops: PropsFrom<typeof MyComponent> = {
  enabled: true,
};

// Or that
const othercompprops: PropsFrom<MyOtherComponent> = {
  enabled: true,
};
