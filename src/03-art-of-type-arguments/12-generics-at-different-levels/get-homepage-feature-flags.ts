export const getHomePageFeatureFlags = <T, K extends T>(
  config: {
    rawConfig: {
      featureFlags: {
        homePage: T
      }
    }
  },
  override: (flags: T) => K
) => {
  return override(config.rawConfig.featureFlags.homePage);
}

export const EXAMPLE_CONFIG = {
  apiEndpoint: "https://api.example.com",
  apiVersion: "v1",
  apiKey: "1234567890",
  rawConfig: {
    featureFlags: {
      homePage: {
        showBanner: true,
        showLogOut: false,
      },
      loginPage: {
        showCaptcha: true,
        showConfirmPassword: false,
      },
    },
  },
};