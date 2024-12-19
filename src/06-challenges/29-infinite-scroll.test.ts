import { it, expect } from "vitest";
import { Expect, Equal } from "../helpers/type-utils";

const makeInfiniteScroll = <
  TRow
>(params: {
  key: keyof TRow,
  fetchRows: () => Promise<TRow[]>,
  initialRows?: TRow[]
}) => {
  const data = params.initialRows || [];

  const scroll = async () => {
    const rows = await params.fetchRows();
    data.push(...rows);
  };

  return {
    scroll,
    getRows: () => data
  };
}

it("Should ensure that the key is one of the properties of the row", () => {
  makeInfiniteScroll({
    // @ts-expect-error
    key: "name",
    fetchRows: () =>
      Promise.resolve([
        {
          id: "1",
        },
      ]),
  });
});

it("Should allow you to pass initialRows", () => {
  const { getRows } = makeInfiniteScroll({
    key: "id",
    initialRows: [
      {
        id: 1,
        name: "John",
      },
    ],
    fetchRows: () => Promise.resolve([]),
  });

  const rows = getRows();

  expect(rows).toEqual([
    {
      id: 1,
      name: "John",
    },
  ]);

  type tests = [
    Expect<Equal<typeof rows, Array<{ id: number; name: string }>>>
  ];
});