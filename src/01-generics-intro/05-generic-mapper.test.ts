import { expect, it } from "vitest"
import { Equal, Expect } from "../helpers/type-utils";

export const concatenateFirstAndLastName = <
  T extends { firstName: string, lastName: string}
>(
  user: T
) => ({
  ...user,
  fullName: `${user.firstName} ${user.lastName}`,
})

it("Should add fullName to an object wich only contains firstName and lastName", () => {
  const users = [
    {
      firstName: "Matt",
      lastName: "Pocock",
    },
  ];

  const newUsers = users.map(concatenateFirstAndLastName);

  expect(newUsers).toEqual([
    {
      firstName: "Matt",
      lastName: "Pocock",
      fullName: "Matt Pocock",
    },
  ]);

  type tests = [
    Expect<
      Equal<
        typeof newUsers,
        Array<{ firstName: string; lastName: string } & { fullName: string }>
      >
    >,
  ];
});

it("Should retain other properties passed in", () => {
  const users = [
    {
      id: 1,
      firstName: "Matt",
      lastName: "Pocock",
    },
  ];

  const newUsers = users.map(concatenateFirstAndLastName);

  expect(newUsers).toEqual([
    {
      id: 1,
      firstName: "Matt",
      lastName: "Pocock",
      fullName: "Matt Pocock",
    },
  ]);

  type tests = [
    Expect<
      Equal<
        typeof newUsers,
        Array<
          { id: number; firstName: string; lastName: string } & {
            fullName: string;
          }
        >
      >
    >,
  ];
});

it("Should fail when the object passed in does not contain firstName", () => {
  const users = [
    {
      firstName: "Matt",
    },
  ];

  const newUsers = users.map(
    // @ts-expect-error
    concatenateFirstAndLastName,
  );
});