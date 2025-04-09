import { describe, it, expect } from "vitest";

// Boilerplate test
describe("Date printing", () => {
  it("should create a valid date", () => {
    const now = new Date();
    expect(now).toBeInstanceOf(Date);
    expect(isNaN(now.getTime())).toBe(false);
  });
});
