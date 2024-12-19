import { expect, it } from "vitest";
import { Expect, Equal } from "../../helpers/type-utils";
import { typedObjectKeys } from "./typed-object-keys";

it("Should return the keys of the object", () => {
  const result1 = typedObjectKeys({
    a: 1,
    b: 2,
  });

  expect(result1).toEqual(["a", "b"]);

  type test = Expect<Equal<typeof result1, Array<"a" | "b">>>;
});
