import { isEqualArrays, removeElement } from "../helpers/array";

declare global {
    interface Array<T> {
        isEqualArray(this: T[], compareArray: T[], strictOrder?: boolean): boolean;
        removeElement(this: T[], element: T): T[];
    }
}

/**
 * Checks if the two arrays contain the same elements.
 * @param {T[]} compareArray "The array to compare"
 * @param {boolean} strictOrder "If the order of the elements in the arrays matter"
 * @returns {boolean}
 */
Array.prototype.isEqualArray = function <T>(compareArray: T[], strictOrder: boolean = false): boolean {
    return isEqualArrays(this, compareArray, strictOrder);
}

/**
 * Removes an element from the array.
 * @param {T[]} array "The input array"
 * @param {T} element "The element to remove from the array"
 * @returns {T[]}
 */
Array.prototype.removeElement = function <T>(element: T): T[] {
    return removeElement(this, element);
}