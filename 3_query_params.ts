// Typescript tip 3
// TypeScript's string interpolation powers are incredible, especially since 4.1.
// Add some utilities from ts-toolbelt, and you've got a stew going.

// Here, we decode some URL search params AT THE TYPE LEVEL.
// https://twitter.com/mpocock1/status/1499002040168636420

import { String, Union } from "ts-toolbelt";

const query = `/home?a=wonderful&b=wow`;

type Query = typeof query;

type SecondQueryPart = String.Split<Query, "?">[1];

type QueryElements = String.Split<SecondQueryPart, "&">;

// DEBUG
// type demo = QueryElements[number];

type QueryParams = {
  [QueryElement in QueryElements[number]]: {
    [Key in String.Split<QueryElement, "=">[0]]: String.Split<QueryElement, "=">[1];
  };
}[QueryElements[number]];

const obj: Union.Merge<QueryParams> = {
    a: 'wonderful',
    b: 'wow'
}