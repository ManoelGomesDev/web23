import Block from "./block";
import Validation from "./validation";

/**
 * A blockchain is a chain of blocks.
 */
export default class Blockchain {
    blocks: Block[];
    nextIndex: number = 0;

    /**
     * Creates a new blockchain with a genesis block.
     */
    constructor() {
        this.blocks = [new Block(this.nextIndex, "", "genesis Block")];
        this.nextIndex++;
    }

    addBlock(block: Block) : Validation {
        const lastBlock = this.getLastBlock();
        const validation = block.isValid(lastBlock.hash, lastBlock.index);
        if(!validation.success) return new Validation(false, `Invalid block #${block.index} ${validation.message}`);
        this.blocks.push(block);
        this.nextIndex++;
        return new Validation(true, "Block added to blockchain.");
    }

    getLastBlock() : Block {
        return this.blocks[this.blocks.length - 1];
    }

    isValid() : Validation {
        for(let i = this.blocks.length - 1; i > 0; i--) {
            const currentBlock = this.blocks[i];
            const previousBlock = this.blocks[i-1];
            const validation = currentBlock.isValid(previousBlock.hash, previousBlock.index);
            if(!validation.success) 
                return new Validation(false, `Invalid block #${currentBlock.index} ${validation.message}`);
        }
        return new Validation(true, "Valid blockchain.");
    }
    
    
}