import { expect, it } from "vitest";

export interface Cache<T> {
  get: (key: string) => T | undefined;
  set: (key: string, value: T) => void;
  clone(): Cache<T>;
  clone<K>(transform: (elem: T) => K) :Cache<K>;
}

const createCache = <T>(initialCache?: Record<string, T>): Cache<T> => {
  const cache: Record<string, T> = initialCache ?? {};

  return {
    get: (key) => cache[key],
    set: (key, value) => {
      cache[key] = value;
    },
    clone(transform?: any) {
      if (!transform) {
        return createCache({ ...cache });
      }

      const newCache: Record<string, ReturnType<typeof transform>> = {};

      for (const key in cache) {
        newCache[key] = transform(cache[key]);
      }

      return createCache(newCache);
    }
  }
}

it("Should let you get and set to/from the cache", () => {
  const cache = createCache<number>();

  cache.set("a", 1);
  cache.set("b", 2);

  expect(cache.get("a")).toEqual(1);
  expect(cache.get("b")).toEqual(2);
});

it("Should let you clone the cache using a transform function", () => {
  const cache = createCache<number>();

  cache.set("a", 1);
  cache.set("b", 2);

  const newCache = cache.clone(String);

  expect(newCache.get("a")).toEqual("1");
  expect(newCache.get("b")).toEqual("2");
});