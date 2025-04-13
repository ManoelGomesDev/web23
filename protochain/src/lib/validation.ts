/**
 * Validation class

 */
export default class Validation {
    success: boolean;
    message: string;

    /**
     * Creates a new Validation instance
     * @param success - If the validation is successful
     * @param message - The message of the validation
     */
    constructor(success: boolean = true, message: string = "") {
        this.success = success;
        this.message = message;
    }
}