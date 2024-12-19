import { Expect, Equal } from "../helpers/type-utils";

const getValue = <TObj, TKey extends keyof TObj>(obj: TObj, key: TKey) => obj[key];

const obj = {
  a: 1,
  b: "hello",
  c: true
};

const numberResult = getValue(obj, "a");
const stringResult = getValue(obj, "b");
const booleanResult = getValue(obj, "c");

type tests = [
  Expect<Equal<typeof numberResult, number>>,
  Expect<Equal<typeof stringResult, string>>,
  Expect<Equal<typeof booleanResult, boolean>>,
];