// 🔥 TypeScript Tip #29 🔥

// React's useState can behave in slightly unexpected ways in TypeScript
// - sometimes giving you 'undefined' when you least expect it.

// Here's a failsafe mental model you can use to never get burned again.

import { useState } from "react";

// No argument, no type argument
const [undefinedThing, setUndefinedThing] = useState();

// No argument, type argument
const [stringThing, setStringThing] = useState<string>();

// Argument, no type argument
const [emptyArray, setEmptyArray] = useState([]);

// Argument, type argument
const [arrayOfIds, seetArrayOfIds] = useState<{ id: string }[]>();
