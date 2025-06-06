import { describe, expect, test } from "@jest/globals";
import Blockchain from "../src/lib/blockchain";
import Block from "../src/lib/block";
describe("Blockchain", () => {
  test("should has genesis block", () => {
    const blockchain = new Blockchain();
    expect(blockchain.blocks.length).toEqual(1);


  });

  test('Should be valid (genesis)', () => {
    const blockchain = new Blockchain();
    expect(blockchain.isValid().success).toEqual(true);
  });

  test("Should be valid (two blocks)", () => {
    const blockchain = new Blockchain();
    blockchain.addBlock(new Block(1, blockchain.blocks[0].hash, "block 2"));
    expect(blockchain.isValid().success).toEqual(true);
  });
  
  

  test("Should add block", () => {
    const blockchain = new Blockchain();
    const result = blockchain.addBlock(new Block(1, blockchain.blocks[0].hash, "block 2"));
    expect(result.success).toEqual(true);

  });

  test("Should not add block", () => {
    const blockchain = new Blockchain();
    const block = new Block(-1, blockchain.blocks[0].hash, "block 2");
    const result = blockchain.addBlock(block);
    expect(result.success).toEqual(false);
  });

  test("Should not be valid (invalid block)", () => {
    const blockchain = new Blockchain();
    blockchain.addBlock(new Block(1, blockchain.blocks[0].hash, "block 2"));
    blockchain.blocks[1].data = "a transfere 2 para b";
    const validation = blockchain.isValid();
    expect(validation.success).toEqual(false);
    expect(validation.message).toEqual("Invalid block #1 Invalid data.");
  });
}); 