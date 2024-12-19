import { Equal, Expect } from "../helpers/type-utils";

const returnBothOfWhatIPassIn =
  <
    TParams extends {
      a: unknown,
      b:unknown
    }
  >(
    params: TParams
  ): [TParams["a"], TParams["b"]] => {
    return [params.a, params.b];
  }

  const result = returnBothOfWhatIPassIn({ a: 1, b: "hello" });

  type test = Expect<Equal<typeof result, [number, string]>>;