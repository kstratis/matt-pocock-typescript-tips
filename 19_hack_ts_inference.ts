// 🔥 TypeScript Tip #19 🔥

// It can be hard to know when to reach for generics. Ask yourself:

// Are there ZERO dynamic elements in your function? No generics needed.

// If you have dynamic elements, do you know all their shapes up front? You might just need a union type.

// https://twitter.com/mattpocockuk/status/1513492326555037698

interface Animal {
  name: string;
}

interface Human {
  firstName: string;
  lastName: string;
}

type HumanName = { humanName: string };
type AnimalName = { animalName: string };

export const getDisplayName = <TItem extends Animal | Human>(
  item: TItem
): TItem extends Human ? HumanName : AnimalName => {
  if ("firstName" in item) {
    return { humanName: `${item.firstName} ${item.lastName}` };
  } else {
    return { animalName: item.name };
  }
};
