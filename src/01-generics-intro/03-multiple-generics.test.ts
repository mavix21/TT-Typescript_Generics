import { expect, expectTypeOf, it } from "vitest";
import { Equal, Expect } from "../helpers/type-utils";

const returnBothOfWhatIPassIn = <T, U>(a: T, b: U) => ({ a, b });

it("Should return an object of the arguments you pass", () => {
  const result = returnBothOfWhatIPassIn(1, 'a');

  expect(result).toEqual({
    a: 1,
    b: 'a',
  });

  type test1 = Expect<
    Equal<
      typeof result,
      {
        a: number;
        b: string;
      }
    >
  >;
  expectTypeOf(result).toEqualTypeOf<{
    a: number;
    b: string;
  }>();
});