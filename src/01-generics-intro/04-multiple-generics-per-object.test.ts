import { expect, expectTypeOf, it } from "vitest"

const returnBothOfWhatIPassIn = <T1, T2>(params: { a: T1, b: T2 }) => {
  return {
    first: params.a,
    second: params.b,
  }
}

it("Should return an object where a -> first and b -> second", () => {
  const result = returnBothOfWhatIPassIn({ a: 1, b: 'a' });

  expect(result).toEqual({
    first: 1,
    second: 'a',
  });

  expectTypeOf(result).toEqualTypeOf<{
    first: number;
    second: string;
  }>();
});