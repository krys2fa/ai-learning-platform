import "@testing-library/jest-dom";

// Mock next/navigation for tests
jest.mock("next/navigation", () => {
  return {
    __esModule: true,
    usePathname: () => "/",
    useSearchParams: () => new URLSearchParams(),
    useRouter: () => ({
      push: jest.fn(),
      replace: jest.fn(),
      refresh: jest.fn(),
      back: jest.fn(),
      forward: jest.fn(),
      prefetch: jest.fn(),
    }),
  };
});

// Mock next/link to behave like a normal anchor in tests
jest.mock("next/link", () => {
  const React = require("react");
  return ({ children, href = "#", ...props }: any) =>
    React.createElement(
      "a",
      { href: typeof href === "string" ? href : "#", ...props },
      children
    );
});

// Mock lucide-react icons to simple null components
jest.mock("lucide-react", () => {
  return new Proxy(
    {},
    {
      get: () => () => null,
    }
  );
});
