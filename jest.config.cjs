module.exports = {
    roots: ["<rootDir>/src"],
    testEnvironment: "jsdom",
    transform: {
      "^.+\\.(ts|js|tsx|jsx)$": "@swc/jest",
    },
    transformIgnorePatterns: [
      "[/\\\\]node_modules[/\\\\].+\\.(js|jsx|mjs|cjs|ts|tsx)$",
    ],
    moduleNameMapper: {
        "^.+\\.css$": "<rootDir>/src/__mocks__/file-mock.cjs",
        "^.+\\.module\\.(css|sass|scss)$": "identity-obj-proxy",
  "^.+\\.css$": "<rootDir>/src/__mocks__/file-mock.cjs",
      },
  };
  