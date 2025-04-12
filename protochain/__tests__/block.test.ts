import { describe, expect, test } from "@jest/globals";
import Block from "../src/lib/block";

describe("Block", () => {
  test("should be valid", () => {
    const block = new Block(1, "a");
    const valid = block.isValid();
    expect(valid).toBeTruthy();
  });

  test("should not be valid", () => {
    const block = new Block(1, "");
    const valid = block.isValid();
    expect(valid).toBeFalsy();
  });

  test("should not be valid (index < 0)", () => {
    const block = new Block(-1, "a");
    const valid = block.isValid();
    expect(valid).toBeFalsy();
  });

  
});