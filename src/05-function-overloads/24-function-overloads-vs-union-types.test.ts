import { expect, it } from "vitest";
import { Equal, Expect } from "../helpers/type-utils";

function runGenerator<TReturn>(generator: { run: () => TReturn }): TReturn;
function runGenerator<TReturn>(generator: () => TReturn): TReturn;
function runGenerator(generator: any) {
  if (typeof generator === "function") {
    return generator();
  }
  return generator.run();
}

it("Should accept an object where the generator is a function", () => {
  const result = runGenerator({
    run: () => "hello",
  });

  expect(result).toBe("hello");

  type test1 = Expect<Equal<typeof result, string>>;
});

it("Should accept an object where the generator is a function", () => {
  const result = runGenerator(() => "hello");

  expect(result).toBe("hello");

  type test1 = Expect<Equal<typeof result, string>>;
});