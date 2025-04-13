import { beforeEach, describe, expect, test } from "@jest/globals";
import Block from "../src/lib/block";

describe("Block", () => {

    let genesis: Block;

    beforeEach(() => {
        genesis = new Block(0, "", "genesis block");
    });

  test("should be valid", () => {
    const block = new Block(1, genesis.hash, "block 2");
    const valid = block.isValid(genesis.hash, genesis.index);
    expect(valid.success).toBeTruthy();
  });

  test("should not be valid (previous hash is empty)", () => {
    const block = new Block(1, "", "block 2");
    const valid = block.isValid(genesis.hash, genesis.index);
    expect(valid.success).toBeFalsy();
  });



  test("should not be valid (timestamp)", () => {
    const block = new Block(1, genesis.hash, "block 2");
    block.timestamp = -1;
    block.hash = block.getHash();
    const valid = block.isValid(genesis.hash, genesis.index);
    expect(valid.success).toBeFalsy();
  });

  test("should not be valid (hash is empty)", () => {
    const block = new Block(1, genesis.hash, "block 2");
    block.hash = "";
    const valid = block.isValid(genesis.hash, genesis.index);
    expect(valid.success).toBeFalsy();
  });

  test("should not be valid (data is empty)", () => {
    const block = new Block(1, genesis.hash, "");
    const valid = block.isValid(genesis.hash, genesis.index);
    expect(valid.success).toBeFalsy();
  });
  
  
  
  
  
  

  test("should not be valid (index < 0)", () => {
    const block = new Block(-1, "a", "block 2");
    const valid = block.isValid(genesis.hash, genesis.index);
    expect(valid.success).toBeFalsy();
  });

  
});