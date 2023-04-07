import { describe, expect, test } from "@jest/globals";
import { rangeContains } from "../utils/range";

describe("rangeContains module", () => {
  test("adds start:5, end:1, value:3, to equal false", () => {
    expect(rangeContains({ start: 5, end: 1 }, 3)).toBe(false);
  });

  test("adds start:1, end:5, value:3, to equal true", () => {
    expect(rangeContains({ start: 1, end: 5 }, 3)).toBe(true);
  });

  test("adds start:1, end:5, value:10, to equal false", () => {
    expect(rangeContains({ start: 1, end: 5 }, 10)).toBe(false);
  });
});
