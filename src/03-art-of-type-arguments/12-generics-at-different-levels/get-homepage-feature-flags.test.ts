import { describe, expect, it } from "vitest";
import { EXAMPLE_CONFIG, getHomePageFeatureFlags } from "./get-homepage-feature-flags";

describe("getHomepageFeatureFlags", () => {
  it("Should return the feature flags for the homepage", () => {
    const flags = getHomePageFeatureFlags(EXAMPLE_CONFIG, (defaultFlags) => defaultFlags);

    expect(flags).toEqual({
      showBanner: true,
      showLogOut: false,
    });
  });

  it("Should allow overriding the feature flags for the homepage", () => {
    const flags = getHomePageFeatureFlags(EXAMPLE_CONFIG, (defaultFlags) => ({
      ...defaultFlags,
      showBanner: false,
    }));

    expect(flags).toEqual({
      showBanner: false,
      showLogOut: false,
    });
  });
});