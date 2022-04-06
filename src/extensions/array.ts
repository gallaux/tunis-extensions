import { isEqualArrays } from "../helpers/array";

declare global {
    interface Array<T> {
        isEqualArray(this: T[], compareArray: T[], strictOrder?: boolean): boolean;
    }
}

/**
 * Checks if the two arrays contain the same elements.
 * @param {T[]} compareArray "The array to compare"
 * @param {boolean} strictOrder "If the order of the elements in the arrays matter"
 * @returns {boolean}
 */
Array.prototype.isEqualArray = function<T> (compareArray: T[], strictOrder: boolean = false): boolean {
    return isEqualArrays(this, compareArray, strictOrder);
}