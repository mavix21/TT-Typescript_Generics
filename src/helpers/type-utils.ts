export type Expect<T extends true> = T;
export type ExpectTrue<T extends true> = T;
export type ExpectFalse<T extends false> = T;
export type IsTrue<T extends true> = T;
export type IsFalse<T extends false> = T;

export type Equal<X, Y> = (<T>() => T extends X ? 1 : 2) extends <T>() => T extends Y ? 1 : 2 ? true : false;

export type IsAny<T> = 0 extends 1 & T ? true : false;
export type NotAny<T> = true extends IsAny<T> ? false : true;

export type Debug<T> = { [K in keyof T]: T[K] };

// An intersection is when you have a type like this:
// type A = { a: string } & { b: number }
// The type A is an intersection of { a: string } and { b: number }
// This helper type will merge all intersections in a type
// i.e MergeIntersections<{ a: string } & { b: number }> will return { a: string, b: number }
export type MergeIntersections<T> = T extends object
  ? { [K in keyof T]: MergeIntersections<T[K]> }
  : T;

export type Alike<X ,Y> = Equal<MergeIntersections<X>, MergeIntersections<Y>>;

export type ExpectExtends<VALUE, EXPECTED> = EXPECTED extends VALUE ? true : false;
export type ExpectValidArgs<
  FUNC extends (...args: any[]) => any,
  ARGS extends any[]
> = ARGS extends Parameters<FUNC> ? true : false;

export type UnionToIntersection<U> = (
  U extends any ? (k: U) => void : never
) extends (k: infer I) => void
  ? I
  : never;