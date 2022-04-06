/**
 * Checks if the two arrays contain the same elements.
 * @param {T[]} compareArray "The array to compare"
 * @param {boolean} strictOrder "If the order of the elements in the arrays matter"
 * @returns {boolean}
 */
Array.prototype.isEqualArray = function (compareArray: string[], strictOrder: boolean = false): boolean {
    if (this.length !== compareArray.length) return false;
    if (strictOrder) {
        return JSON.stringify(this) === JSON.stringify(compareArray);
    } else {
        return JSON.stringify([...this].sort()) === JSON.stringify([...compareArray].sort());
    }
}