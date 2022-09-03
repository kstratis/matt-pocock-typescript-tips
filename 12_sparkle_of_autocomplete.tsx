// 🔥 TypeScript Tip #12 🔥

// Ever wanted just a _bit_ of autocomplete?
// Here, we create a TypeScript helper called `LooseAutocomplete` which gives us
// autocomplete while also allowing arbitrary values.

// https://twitter.com/mattpocockuk/status/1506607945445949446

type IconSize = LooseAutocomplete<"sm" | "xs">;

type LooseAutocomplete<T extends string> = T | Omit<string, T>;

interface IconProps {
  size: IconSize;
}

export const Icon = (props: IconProps) => {
  return <></>;
};

const Comp1 = () => {
  return (
    <>
      <Icon size="xs"></Icon>
      <Icon size="something"></Icon>
    </>
  );
};
